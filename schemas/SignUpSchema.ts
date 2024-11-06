import { z } from "zod";

const SignUpSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name is required, should contain at least 2 letters",
    }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, {
        message: "Password is required, should contain at least 8 characters",
      })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    confirmpassword: z
      .string()
      .min(8, { message: "Confirm Password doesn`t match the password" }),
  })
  .refine((input) => input.password === input.confirmpassword, {
    message: "Password and confirm password doesn`t match",
    path: ["confirmpassword"],
  });

type SignUpType = z.infer<typeof SignUpSchema>;
export { SignUpSchema, type SignUpType };
