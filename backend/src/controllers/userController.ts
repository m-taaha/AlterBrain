import {User} from "../model/User"
import { Request, Response } from "express"
import { generateToken, JWTPayload } from "../utils/generateToken";
import { loginSchema, LoginBody } from "../schemas/loginSchema";
import { registerSchema, RegisterBody } from "../schemas/registerSchema";




export const userRegister = async (req: Request<{}, {},  RegisterBody>, res: Response) => {
    try{

         const result = registerSchema.safeParse(req.body);

         if (!result.success) {
           return res.status(400).json({
             message: "Invalid input",
             errors: result.error.flatten().fieldErrors,
           });
         }

         const { name, email, password } = result.data;

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
          message: "Server Error",
          error: error instanceof Error ? error.message : "Unknown error",
        });
    }
}

export const userLogin = async(req: Request<{}, {}, LoginBody>, res: Response) => {
  try{
    if (!req.body) {
      return res.status(400).json({ message: "Request body missing" });
    }

       const result = loginSchema.safeParse(req.body);

       if (!result.success) {
         return res.status(400).json({
           message: "Invalid input",
           errors: result.error.flatten().fieldErrors,
         });
       }

       const { email, password } = result.data;

  const user = await User.findOne({email}).select('+password') //mongoose will not return teh password by default. need to explicitly ask fo ti so comparePassword can work

  if(!user) {
    return res.status(401).json({
      message: 'Invalid Credentials: User does not exist'
    })
  }

  // check if password matches
  const isMatch = await user.comparePassword(password);
  if(!isMatch){
    return res.status(401).json({
      message: 'Invalid credentials: Wrong Password'
    })
  }

  const userToken = generateToken({
    userId: user._id.toString(),
    email: user.email
  })

  res.cookie("userToken", userToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, //7days
  });


  return res.status(200).json({
    message: "User Logged in successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  })
  
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
} 

export const userLogut = async (req: Request, res: Response) => {
  try {

    res.clearCookie("UserToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    })

    return res.status(200).json({
      message: 'User logged out successfully',
    });
    
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
}