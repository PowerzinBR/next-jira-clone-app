import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().trim().min(1, "Campo obrigatório"),
  image: z
    .union([
      z.instanceof(File),
      z.string().transform((value) => (value === "" ? undefined : value)),
    ])
    .optional(),

  workspaceId: z.string()
});