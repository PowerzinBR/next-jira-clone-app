import { z } from "zod";

import { TaskStatus } from "./types";

export const createTaskSchema = z.object({
  name: z
    .string({ required_error: "Campo obrigatório" })
    .trim()
    .min(1, "Campo obrigatório"),
  status: z.nativeEnum(TaskStatus, { required_error: "Campo obrigatório" }),
  workspaceId: z
    .string({ required_error: "Campo obrigatório" })
    .trim()
    .min(1, "Campo obrigatório"),
  projectId: z
    .string({ required_error: "Campo obrigatório" })
    .trim()
    .min(1, "Campo obrigatório"),
  dueDate: z.coerce.date(),
  assigneeId: z
    .string({ required_error: "Campo obrigatório" })
    .trim()
    .min(1, "Campo obrigatório"),
  description: z.string({ required_error: "Campo obrigatório" }).optional(),
});
