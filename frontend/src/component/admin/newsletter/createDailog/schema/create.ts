import z from "zod";

export const newsSchema = z.object({
  title: z.string().min(3, "required"),
  description: z.string().min(5,"required"),
});
type NewsFormData = z.infer<typeof newsSchema>;