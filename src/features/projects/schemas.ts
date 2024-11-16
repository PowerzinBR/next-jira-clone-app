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

export const updateProjectSchema = z.object({
  name: z.string().trim().min(1, "Precisa ter ao menos 1 letra").optional(),
  image: z
    .union([
      z.instanceof(File),
      z.string().transform((value) => (value === "" ? undefined : value)),
    ])
    .optional(),
});