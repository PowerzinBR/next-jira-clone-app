import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DottedSeparator } from "@/components/dotted-separator";

export const TaskViewSwitcher = () => {
  return (
    <Tabs className="flex-1 w-full border rounded-lg">
      <div className="h-full flex flex-col overflow-auto p-4">
        <div className="flex flex-col gap-y-2 lg:flex-row justify-between items-center">
          <TabsList className="w-full lg:w-auto">
            <TabsTrigger className="h-8 w-full lg:w-auto" value="table">
              Tabela
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="kanban">
              Kanban
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="calendar">
              Calendário
            </TabsTrigger>
          </TabsList>
          <Button size="sm" className="w-full lg:w-auto">
            <PlusIcon className="size-4 mr-2" />
            Nova Tarefa
          </Button>
        </div>
        <DottedSeparator className="my-4" />
        {/* Add filters */}
          Filtros de Tarefas
        <DottedSeparator className="my-4" />
        <>
          <TabsContent value="table" className="mt-0">
            Tabelas de tarefas
          </TabsContent>
          <TabsContent value="kanban" className="mt-0">
            Kanban de tarefas
          </TabsContent>
          <TabsContent value="calendar" className="mt-0">
            Calendário de tarefas
          </TabsContent>
        </>
      </div>
    </Tabs>
  );
}