import * as React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/SignedOut/Navbar";

export const Route = createLazyFileRoute("/_layout/signedout")({
  component: SignOut,
});

export function SignOut() {
  return (
    <>
      <Navbar />
    </>
  );
}
