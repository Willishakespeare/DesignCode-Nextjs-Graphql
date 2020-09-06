import Mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    await Mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
  } catch (error) {
    console.log('ConnectError');
    console.log(error);
    process.exit(1);
  }
};

export default connectMongo;
