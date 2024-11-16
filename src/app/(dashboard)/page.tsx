import { redirect } from "next/navigation";

import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";
import { getWorkspaces } from "@/features/workspaces/actions";
import { getCurrent } from "@/features/auth/actions";

export default async function Home() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const workspaces = await getWorkspaces();
  if (workspaces.total === 0) {
    redirect("/workspaces/create");
  } else {
    redirect(`/workspaces/${workspaces.documents[0].$id}`)
  }
}
