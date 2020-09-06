import mongoose, { Schema, Document } from 'mongoose';

export interface IPaymentInfo extends Document {
  name: string;
}
const PaymentInfoSchema: Schema = new Schema({
  typePayment: {
    type: String,
    required: true,
    trim: true
  },
  pricePayment: {
    type: Number,
    required: true,
    trim: true
  },
  statusPayment: {
    type: String,
    default: 'Pending',
    trim: true
  }
});

export default mongoose.model<IPaymentInfo>('PaymentInfo', PaymentInfoSchema);
