import mongoose, {Document, Schema } from 'mongoose';
import { addressSchema, imageSchema } from './Card';
export interface IUser extends Document {
    name:{
      first : string;
      middle? : string;
      last : string;
    }
    email : string;
    password : string;
    image? : {
      url: string;
      alt: string;
    }
    address: {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: string;
    zip: string;
  };
    phoneNumber: string;
    isBusiness: boolean;
    isAdmin: boolean;
    failedLoginAttempts: number; 
    lockUntil: Date | null;
}
const nameSchema: Schema = new Schema({
  first: { type: String, required: true},
  middle: { type: String, required: false},
  last: { type: String, required: true}
})
const UserSchema: Schema = new Schema({

    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    name: { type: nameSchema, required: true},
    phoneNumber: { type: String, required: false},
    image: { type: imageSchema, required: false},
    address: { type: addressSchema, required:true},
    isBusiness: { type: Boolean, default:false},
    isAdmin: { type: Boolean, default:false},
    failedLoginAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date, default: null }
})

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // Declare the user property here
    }
  }
}
export default mongoose.model<IUser>('User', UserSchema);