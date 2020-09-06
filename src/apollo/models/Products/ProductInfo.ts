import mongoose, { Schema, Document } from 'mongoose';

export interface IProductInfo extends Document {
  idUser: string;
  idClient: string;
  nameProduct: string;
  typeProduct: string;
  statusProduct: string;
  daysEstimated: number;
  date: Date;
  _id: boolean;
}
const ProductInfoSchema: Schema = new Schema({
  nameProduct: {
    type: String,
    required: true,
    trim: true
  },
  typeProduct: {
    type: String,
    required: true,
    trim: true
  },
  idUser: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  idClient: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Client'
  },
  statusProduct: {
    type: String,
    default: 'In Process',
    trim: true
  },
  daysEstimated: {
    type: Number,
    default: 30
  },
  date: {
    type: Date,
    default: Date.now()
  },
  listUrl: {
    type: Array,
    default: []
  }
});

export default mongoose.model<IProductInfo>('ProductInfo', ProductInfoSchema);
