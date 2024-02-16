import { NavbarIn } from "@/components/SignedIn/NavbarIn";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/signedin")({
  component: SignIn,
});

export function SignIn() {
  return (
    <>
      <NavbarIn />
    </>
  );
}
