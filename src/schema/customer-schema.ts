import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  unit: z.string().optional(),
  code: z.string().min(1, "Code is required"),
});
