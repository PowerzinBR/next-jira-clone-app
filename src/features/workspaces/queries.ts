"use server";

import { Query } from "node-appwrite";

import { getMember } from "@/features/members/utils";

import { createSessionClient } from "@/lib/appwrite";
import { DATABASE_ID, MEMBERS_ID, WORKSPACES_ID } from "@/config";

import { Workspace } from "./types";

interface GetWorkspaceProps {
  workspaceId: string;
}

export const getWorkspaces = async () => {
  try {
    const { databases, account } = await createSessionClient();
    const user = await account.get();

    const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
      Query.equal("userId", user.$id),
    ]);

    if (members.total === 0) {
      return { documents: [], total: 0 };
    }

    const workspacesId = members.documents.map((member) => member.workspaceId);

    const workspaces = await databases.listDocuments(
      DATABASE_ID,
      WORKSPACES_ID,
      [Query.orderDesc("$createdAt"), Query.contains("$id", workspacesId)]
    );

    return workspaces;
  } catch (error) {
     return { documents: [], total: 0 };
  }
};

export const getWorkspace = async ({ workspaceId }: GetWorkspaceProps) => {
  try {
    const { databases, account } = await createSessionClient();
    const user = await account.get();
  
    const member = await getMember({
      databases,
      userId: user.$id,
      workspaceId
    });

    if (!member) {
      return null;
    }

    const workspaces = await databases.getDocument<Workspace>(
      DATABASE_ID,
      WORKSPACES_ID,
      workspaceId
    );

    return workspaces;
  } catch (error) {
    return null
  }
};