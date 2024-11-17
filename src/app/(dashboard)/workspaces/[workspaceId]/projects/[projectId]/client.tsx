"use client";

import { Pencil } from "lucide-react";
import Link from "next/link";

import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { TaskViewSwitcher } from "@/features/tasks/components/task-view-switcher";

import { Button } from "@/components/ui/button";
import { PageLoader } from "@/components/page-loader";
import { PageError } from "@/components/page-error";

import { useProjectId } from "@/features/projects/hooks/use-project-id";
import { useGetProjectAnalytics } from "@/features/projects/api/use-get-project-analytics";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { Analytics } from "@/components/analytics";

export const ProjectIdClient = () => {
	const projectId = useProjectId();
	const { data: analytics, isLoading: analyticsLoading } = useGetProjectAnalytics({ projectId })
	const { data: project, isLoading: projectsLoading } = useGetProject({
		projectId,
	});

  const isLoading = projectsLoading || analyticsLoading;

	if (isLoading) return <PageLoader />;
	if (!project) return <PageError />;

	const href = `/workspaces/${project.workspaceId}/projects/${project.$id}/settings`;

	return (
		<div className="flex flex-col gap-y-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-x-2">
					<ProjectAvatar
						name={project.name}
						image={project.imageUrl}
						className="size-8"
					/>
					<p className="text-lg font-semibold">{project.name}</p>
				</div>
				<Button variant="secondary" size="sm" asChild>
					<Link href={href}>
						<Pencil className="size-4 mr-2" />
						Editar projeto
					</Link>
				</Button>
			</div>
			{analytics ? (
				<Analytics data={analytics} />
			) : null}
			<TaskViewSwitcher hideProjectFilter />
		</div>
	);
};