"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

export const PageError = () => {
  return (
    <div className="h-screen flex items-center gap-y-2 justify-center flex-col">
      <AlertTriangle className="text-amber-500 size-6" />
      <p className="text-sm text-muted-foreground font-semibold">
        Algo deu errado
      </p>
      <Button variant="secondary" size="sm">
        <Link href="/">Voltar ao início</Link>
      </Button>
    </div>
  );
};
