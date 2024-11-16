"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useJoinWorkspace } from "../api/use-join-workspace";
import { useInviteCode } from "../hooks/use-invite-code";
import { useWorkspaceId } from "../hooks/use-workspace-id";

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
  };
}

export const JoinWorkspaceForm = ({
  initialValues,
}: JoinWorkspaceFormProps) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const inviteCode = useInviteCode();
  const { mutate, isPending } = useJoinWorkspace();

  const onSubmit = () => {
    mutate(
      {
        param: { workspaceId },
        json: { code: inviteCode },
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">
          Entrar no espaço de trabalho
        </CardTitle>
        <CardDescription>
          Você foi convidado para entrar no espaço de trabalho chamado{" "}
          <strong>{initialValues.name}</strong>
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator className="py-7" />
      </div>
      <CardContent className="p-7">
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-between">
          <Button
            size="lg"
            className="w-full lg:w-fit"
            variant="secondary"
            type="button"
            disabled={isPending}
            asChild
          >
            <Link href="/">Cancelar</Link>
          </Button>
          <Button
            size="lg"
            className="w-full lg:w-fit"
            type="button"
            onClick={onSubmit}
            disabled={isPending}
          >
            Entrar no espaço de trabalho
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
