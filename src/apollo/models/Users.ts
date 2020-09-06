import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  lastname: string;
  nickname: string;
  email: string;
  type: string;
  password: string;
  profilePicture: string;
  emailVerified: boolean;
  desc: string;
  date: Date;
}
const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  nickname: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  profilePicture: {
    type: String,
    default: 'https://res.cloudinary.com/design-code-mx/image/upload/v1589573975/tgimggdxqdukrswmkvft.jpg'
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  desc: {
    type: String,
    default: ''
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model<IUser>('User', UserSchema);
