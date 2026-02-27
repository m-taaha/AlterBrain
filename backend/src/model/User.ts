import bcrypt from "bcryptjs";
import mongoose, {Schema , Document} from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}


const UserSchema = new Schema<IUser>({
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

// Hash password before saving  
UserSchema.pre<IUser>('save', async function () {
  if(!this.isModified('password')) return ;


  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  
})


export const User = mongoose.model<IUser>("User", UserSchema);