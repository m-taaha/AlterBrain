import jwt from 'jsonwebtoken'

const JWT_USER_SECRET_KEY = process.env.JWT_USER_SECRET_KEY;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

if(!JWT_USER_SECRET_KEY) {
    throw new Error("JWT_USER_SECRET_KEY is not defined in environment variables");
}

if(!JWT_EXPIRES_IN) {
    throw new Error("JWT_EXPIRES_IN is not defined in environment variables");
}

/* 
-> generate a jwt 
-> @param payload the data to include in the token (eg.., user ID, email)
-> returns the generated JWT string
*/ 

export const generateToken = (payload: object): string => {
    //sign the token with the payload, secret and options
   const token = jwt.sign(payload, JWT_USER_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN
   });

   return token;
}

