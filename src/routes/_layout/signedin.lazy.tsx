import { createLazyFileRoute } from "@tanstack/react-router";
import { NavbarIn } from "@/components/SignedIn/Navbar";

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
