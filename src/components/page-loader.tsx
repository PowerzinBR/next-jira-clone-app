"use client";

import { Loader } from "lucide-react";

export const PageLoader = () => {
  return (
    <div className="h-screen flex items-center gap-y-2 justify-center flex-col animate-pulse">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};