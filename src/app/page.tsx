"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in")
    }
  }, [data, isLoading, router])

  return (
    <div >
      Only visible to authorized users.
      <Button onClick={() => mutate()}>
        Logout
      </Button>
    </div>
  );
}
