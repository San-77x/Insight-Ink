import { createFileRoute } from "@tanstack/react-router";
import { SignIn } from "./_layout/signedin.lazy";

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
