import {User} from "../model/User"
import { Request, Response } from "express"


interface RegisterBody{
  name: string;
  email: string;
  password: string;
}


export const userRegister = async (req: Request<{}, {},  RegisterBody>, res: Response) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }

 
    
    try{
             const existUser = await User.findOne({ email });
             if (existUser) {
               return res.status(400).json({
                 message: "User already exist",
               });
             }

               const newUser = await User.create({
                name,
                email,
                password
               });
               return res.status(201).json({
                 message: "User registered successfully",
                 user: {
                   id: newUser._id,
                   name: newUser.name,
                   email: newUser.email,
                 },
               });
             

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        },)
    }
}