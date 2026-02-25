import mongoose, {Document} from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}


const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    lowercase: true,
    trim: true,
  },
   password: {
      type: String,
      required: [true, 'Please enter your password'],
   }
},
{timestamps: true}
)

export const User = mongoose.model<IUser>("User", userSchema);