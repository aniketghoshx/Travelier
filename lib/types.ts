import { z } from "zod";

export type ToastVariant = "default" | "destructive" | null | undefined;

export const signUpSchema = z.object({
  name: z.string().min(1, "Name is required").max(50),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required").min(6, "Password must have 6 characters").max(50),
  phone: z.string().min(1, "Phone number is required").min(10, "Phone number must have 10 digits"),
});

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must have 6 characters")
    .max(50),
});


