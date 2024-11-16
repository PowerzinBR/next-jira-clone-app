import { getCurrent } from "@/features/auth/queries";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";
import { getProject } from "@/features/projects/queries";
import { redirect } from "next/navigation";

interface ProjectIdSettingsPageProps {
  params: {
    projectId: string;
  }
}

const ProjectIdSettingsPage = async ({ params }: ProjectIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/");

  const initialValues = await getProject({
    projectId: params.projectId
  });

  if (!initialValues) {
    throw new Error("Unauthorized");
  }

  return <div className="w-full lg:max-w-xl">
    <EditProjectForm initialValues={initialValues} />
  </div>;
};
 
export default ProjectIdSettingsPage;