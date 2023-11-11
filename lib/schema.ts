import {z} from 'zod'
export const createClassSchema = z.object({
  name: z.string().min(1, {
    message: "Class name cannot be empty.",
  }),
  subject: z.string().min(1, {
    message: "Subject cannot be empty.",
  }),
});
