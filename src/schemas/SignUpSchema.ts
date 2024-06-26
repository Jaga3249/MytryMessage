import { z } from "zod";
export const usernameValidation = z
  .string()
  .min(4, "username must be atleast 4 character")
  .max(20, "username must be no more than 20 character")
  .regex(/^[a-zA-Z0-9]+$/, "username must not contain special character");
export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be atleast six character" }),
});
