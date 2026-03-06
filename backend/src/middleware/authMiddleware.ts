import {Request, Response, NextFunction } from "express";
import { verifyJwttoken } from "../utils/verifyJwtToken";
import { User } from "../model/User";


export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const token = req.cookies?.userToken;

    if(!token) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    const decode = verifyJwttoken(token);

    const user = await User.findById(decode.userId);

    if(!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    req.user = user;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    })
  }
}