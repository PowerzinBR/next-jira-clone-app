import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";

import { DottedSeparator } from "./dotted-separator";
import { AnalyticsCard } from "./analytics-card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
  return (
    <ScrollArea className="border rounded-lg w-full whitespace-nowrap shrink-0">
      <div className="w-full flex flex-row">
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Tarefas totais"
            value={data.taskCount}
            variant={data.taskDiff > 0 ? "up" : "down"}
            increasedValue={data.taskDiff}
          />
          <DottedSeparator direction="vertical" />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Tarefas atribuídas"
            value={data.assignedTaskCount}
            variant={data.assignedTaskDiff > 0 ? "up" : "down"}
            increasedValue={data.assignedTaskDiff}
          />
          <DottedSeparator direction="vertical" />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Tarefas concluídas"
            value={data.completedTaskCount}
            variant={data.completeTaskDiff > 0 ? "up" : "down"}
            increasedValue={data.completeTaskDiff}
          />
          <DottedSeparator direction="vertical" />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Tarefas atrasadas"
            value={data.overdueTaskCount}
            variant={data.overdueTaskDiff > 0 ? "up" : "down"}
            increasedValue={data.overdueTaskDiff}
          />
          <DottedSeparator direction="vertical" />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Tarefas incompletas"
            value={data.incompleteTaskCount}
            variant={data.incompleteTaskDiff > 0 ? "up" : "down"}
            increasedValue={data.incompleteTaskDiff}
          />
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
