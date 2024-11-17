import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import { ProjectIdSettingsClient } from "./client";

interface ProjectIdSettingsPageProps {
  params: {
    projectId: string;
  }
}

const ProjectIdSettingsPage = async ({ params }: ProjectIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/");

  return <ProjectIdSettingsClient />
};
 
export default ProjectIdSettingsPage;