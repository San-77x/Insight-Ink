import * as React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/SignedIn/Navbar";

export const Route = createLazyFileRoute("/_layout/signedin")({
  component: SignIn,
});

export function SignIn() {
  return (
    <>
      <Navbar />
    </>
  );
}
