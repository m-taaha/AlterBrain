import {z} from 'zod';

export const nameValidation = z
.string()
.min(2, "name must be of at least 2 characters")
.max(20, "name must be of at most 20 characters");

export const registerSchema = z.object({
    name: nameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "password must be at least 6 characters"})
})
 