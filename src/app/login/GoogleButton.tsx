"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function GoogleButton() {
  return (
    <Button
      variant="outline"
      className="w-full"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      Google
    </Button>
  );
}
