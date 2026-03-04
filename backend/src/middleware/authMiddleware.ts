import jwt from 'jsonwebtoken'
import { JWTPayload } from '../utils/generateToken';

const JWT_USER_SECRET_KEY = process.env.JWT_USER_SECRET_KEY;

if (!JWT_USER_SECRET_KEY) {
  throw new Error(
    "JWT_USER_SECRET_KEY is not defined in environment variables",
  );
}

/**
 * Verifies a JWT token.
 * @param token The JWT string to verify.
 * @returns The decoded payload if valid, otherwise throws an error.
 */

export const verifyJwttoken = (token: string): JWTPayload => {
    try{
        // the verify method decodes the token and checks its signature and expiration 
        const decodedPlayload = jwt.verify(token, JWT_USER_SECRET_KEY) as JWTPayload;
        return decodedPlayload;
    } catch (error) {
        console.log('Error verifying JWT token:', error)
        throw new Error ("Invalid or expired token")
    }
}