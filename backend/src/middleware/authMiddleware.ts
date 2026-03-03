import jwt from 'jsonwebtoken'

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

export const verifyToken = (token: string): string | jwt.JwtPayload =>{
    try{
        // the verify method decodes the token and checks its signature and expiration 
        return jwt.verify(token, JWT_USER_SECRET_KEY);
    } catch (error) {
        throw new Error ("Invalid or expired token")
    }
}