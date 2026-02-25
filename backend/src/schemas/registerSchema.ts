import {z} from 'zod';

export const nameValidation = z
.string()
.min(2, "name must be of atleast 2 characters")
.min(20, "name must be of atleast 20 characters");

export const registerSchema = z.object({
    name: nameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "password must be at least 6 characters"})
})
