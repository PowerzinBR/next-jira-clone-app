import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Este campo é obrigatório"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Este campo é obrigatório"),
  email: z.string().email("Email inválido"),
  password: z
    .string()
    .min(8, "Este campo precisa ter pelo menos 8 caractéres")
    .max(256, "Este campo precisa ter no máximo 256 caractéres"),
});