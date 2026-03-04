import jwt, { Secret, SignOptions } from 'jsonwebtoken'
import { configDotenv } from "dotenv";

// Load environment variable
configDotenv();

// define the interface for the JWT payload for type safety
export type JWTPayload = {
    userId: string;
    email: string;
}

const JWT_USER_SECRET_KEY = process.env.JWT_USER_SECRET_KEY?.trim();
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN?.trim();

if (!JWT_USER_SECRET_KEY || !JWT_EXPIRES_IN) {
  throw new Error("JWT environment variables are missing");
}

/* 
-> generate a jwt 
-> @param payload the data to include in the token (eg.., user ID, email)
-> returns the generated JWT string
*/ 

export const generateToken = (payload: JWTPayload): string => {
 try{
  // We cast payload to 'object' and secret as 'Secret' to satisfy the library overload
    const token = jwt.sign(payload, JWT_USER_SECRET_KEY as Secret, {
      expiresIn: JWT_EXPIRES_IN as SignOptions["expiresIn"],
    }); 

   return token;

 } catch (error) {
    console.log('Error generating JWT token:', error);
    throw new Error('Could not generate JWT token');
 }
}

