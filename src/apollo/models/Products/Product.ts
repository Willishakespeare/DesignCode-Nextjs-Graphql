import mongoose, { Schema, Document } from 'mongoose';
import ProductInfo from './ProductInfo';
import PaymentInfo from './PaymentInfo';
import Requirement from './Requirement';

export interface IProduct extends Document {
  productInfo: any;
  requirements: [];
  paymentInfo: any;
}
const ProductSchema: Schema = new Schema({
  productInfo: {
    type: ProductInfo.schema,
    required: true,
    _id: false
  },
  requirements: {
    type: Requirement.schema,
    require: true,
    _id: false
  },
  paymentInfo: {
    type: PaymentInfo.schema,
    required: true,
    _id: false
  }
});

export default mongoose.model<IProduct>('Product', ProductSchema);
