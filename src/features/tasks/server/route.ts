import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { ID, Query } from "node-appwrite";

import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID, TASKS_ID } from "@/config";
import { getMember } from "@/features/members/utils";

import { createTaskSchema } from "../schema";
import { TaskStatus } from "../types";

// import { Project } from "@/features/projects/types";

const app = new Hono().post(
  "/",
  sessionMiddleware,
  zValidator("json", createTaskSchema),
  async (c) => {
    const databases = c.get("databases");
    const user = c.get("user");
    const { name, status, dueDate, projectId, assigneeId, workspaceId } =
      c.req.valid("json");

    const member = await getMember({
      databases,
      workspaceId,
      userId: user.$id,
    });

    if (!member) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const highestPositionTask = await databases.listDocuments(
      DATABASE_ID,
      TASKS_ID,
      [
        Query.equal("status", status),
        Query.equal("workspaceId", workspaceId),
        Query.orderAsc("position"),
        Query.limit(1),
      ]
    );

    const newPosition = highestPositionTask.documents.length > 0 ? highestPositionTask.documents[0].position + 1000 : 1000;

    const task = await databases.createDocument(
      DATABASE_ID,
      TASKS_ID,
      ID.unique(),
      {
        name,
        status,
        dueDate,
        workspaceId,
        projectId,
        assigneeId,
        position: newPosition,
      }
    );
    return c.json({ data: task });
  }
);

export default app;
