import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import { ProjectIdSettingsClient } from "./client";

const ProjectIdSettingsPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/");

  return <ProjectIdSettingsClient />
};
 
export default ProjectIdSettingsPage;