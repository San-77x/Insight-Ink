import * as React from "react";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { SignIn } from "./_layout/signedin.lazy";
import { SignOut } from "./_layout/signedout.lazy";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

export function LayoutComponent() {
  return (
    <div>
      <SignIn />
    </div>
  );
}
