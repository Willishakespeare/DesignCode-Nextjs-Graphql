/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Users from '../../models/Users';
import Clients from '../../models/Clients';
import Product from '../../models/Products/Product';
import ProductBackup from '../../models/Products/ProductBackup';

import { IInput } from '../interfaces/interfaces';

for (const model in mongoose.models) delete mongoose.models[model];

const createToken = (user, secret, expiresIn) => {
  const { id, email, name, lastname, nickname, profilePicture, desc, date, emailVerified } = user;
  return jwt.sign(
    { id, email, name, lastname, nickname, profilePicture, desc, date, emailVerified },
    secret,
    { expiresIn }
  );
};

const resolvers = {
  Query: {
    getClient: async (_, {}, ctx) => {
      return ctx.user;
    },
    getUser: async (_, {}, ctx) => {
      return ctx.user;
    },
    getProducts: async () => {
      try {
        const products = await Product.find({});
        return products;
      } catch (error) {
        console.log(error);
      }
    },
    getProductById: async (_, { id }) => {
      const product = await Product.findById(id);
      if (!product) {
        throw new Error('Product Not Find It');
      }
      return product;
    },
    getProductUserById: async (_, { id }, ctx) => {
      const product = await Product.findById(id);
      if (!product) {
        throw new Error('Product Not Find It');
      }
      if (product.productInfo.idUser.toString() !== ctx.user.id) {
        throw new Error('Not Have the Correct Credencials');
      }
      return product;
    },
    getProductClientById: async (_, { id }, ctx) => {
      const product = await Product.findById(id);
      if (!product) {
        throw new Error('Product Not Find It');
      }
      if (product.productInfo.idClient.toString() !== ctx.user.id) {
        throw new Error('Not Have the Correct Credencials');
      }
    },
    getProductsUser: async (_, {}, ctx) => {
      try {
        const products = await Product.find({ 'productInfo.idUser': ctx.user.id });
        return products;
      } catch (error) {
        console.log(error);
      }
    },
    getProductsClient: async (_, {}, ctx) => {
      try {
        const products = await Product.find({ 'productInfo.idClient': ctx.user.id });
        return products;
      } catch (error) {
        console.log(error);
      }
    }
  },
  Mutation: {
    newClient: async (_, { input }) => {
      const { email, password } = input;
      const clientExist = await Clients.findOne({ email });

      if (clientExist) {
        throw new Error('The user has already been used');
      }
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      try {
        const user = new Clients(input);
        user.save();
        return user;
      } catch (error) {
        console.log(error);
      }
    },
    authClient: async (_, { input }) => {
      const { email, password } = input;
      const userExist = await Clients.findOne({ email });

      if (!userExist) {
        throw new Error('The user not exist');
      }
      const passwordCorrect = await bcryptjs.compare(password, userExist.password);
      if (!passwordCorrect) {
        throw new Error('The password is incorrect');
      }

      return {
        token: createToken(userExist, process.env.USING_SECRETS, '24h')
      };
    },
    newUser: async (_, { input }: IInput) => {
      const { email, password } = input;
      const userExist = await Users.findOne({ email });

      if (userExist) {
        throw new Error('The user has already been used');
      }
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      try {
        const user = new Users(input);
        user.save();
        return user;
      } catch (error) {
        console.log(error);
      }
    },

    authUser: async (_, { input }) => {
      const { email, password } = input;
      const userExist = await Users.findOne({ email });

      if (!userExist) {
        throw new Error('The user not exist');
      }
      const passwordCorrect = await bcryptjs.compare(password, userExist.password);
      if (!passwordCorrect) {
        throw new Error('The password is incorrect');
      }

      return {
        token: createToken(userExist, process.env.USING_SECRETS, '24h')
      };
    },

    newProduct: async (_, { input }, ctx) => {
      try {
        const userId = await Users.findOne({ email: input.productInfo.idUser.toString() });
        if (!userId) {
          throw new Error('The user not exist');
        }
        input.productInfo.idUser = userId.id;
        input.productInfo.idClient = ctx.user.id;
        const product = new Product(input);
        const result = await product.save();
        return result;
      } catch (error) {
        console.log(error);
      }
    },
    updateProduct: async (_, { id, input }) => {
      let product = await Product.findById(id);
      if (!product) {
        throw new Error('Product Not Find It');
      }
      product = await Product.findOneAndUpdate({ _id: id }, input, { new: true });
      return product;
    },
    deleteProduct: async (_, { id }) => {
      let product = await Product.findById(id);
      if (!product) {
        throw new Error('Product Not Find It');
      }

      product = product.toObject();
      delete product._id;
      const productBackup = new ProductBackup(product);
      await productBackup.save();
      await Product.findByIdAndDelete(id);
      return 'Product Delete';
    }
  }
};

export default resolvers;
