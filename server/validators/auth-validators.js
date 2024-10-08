const { z } = require("zod");

const signUpSchema = z.object({
  username: z
    .string({ required_error: "Name is required." })
    .trim()
    .min(3, { message: "Name must have atleast 3 characters." })
    .max(255, { message: "Name can contain maximum of 255 characters." }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address." })
    .min(3, { message: "Email must have atleast 3 characters." })
    .max(255, { message: "Email can contain maximum of 255 characters." }),

  phone: z
    .string({ required_error: "Phone Number is required." })
    .trim()
    .min(10, { message: "Phone Number must have atleast 10 characters." })
    .max(20, { message: "Phone Number can contain maximum of 20 characters." }),

  password: z
    .string({ required_error: "Password is required." })
    .min(7, { message: "Password must have at least 7 characters." })
    .max(1024, { message: "Password can contain maximum of 1024 characters." }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address." })
    .min(3, { message: "Email must have atleast 3 characters." })
    .max(255, { message: "Email can contain maximum of 255 characters." }),

  password: z
    .string({ required_error: "Password is required." })
    .min(7, { message: "Password must have at least 7 characters." })
    .max(1024, { message: "Password can contain maximum of 1024 characters." }),
});

module.exports = { signUpSchema, loginSchema };