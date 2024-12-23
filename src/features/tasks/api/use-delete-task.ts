import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client.api.tasks)[":taskId"]["$delete"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.tasks)[":taskId"]["$delete"]
>;

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const response = await client.api.tasks[":taskId"].$delete({ param });
      if (!response.ok) throw new Error("Failed to create task");

      return await response.json();
    },
    onSuccess: ({ data }) => {
      toast.success("Tarefa excluída.");

      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["task", data.$id] });
      queryClient.invalidateQueries({ queryKey: ["product-analytics"] });
      queryClient.invalidateQueries({
        queryKey: ["workspace-analytics"],
      });
    },
    onError: () => {
      toast.error("Falha ao excluir tarefa");
    },
  });

  return mutation;
};
