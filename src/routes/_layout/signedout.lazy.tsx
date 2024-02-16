import { createLazyFileRoute } from "@tanstack/react-router";
import { NavbarOut } from "@/components/SignedOut/Navbar";

export const Route = createLazyFileRoute("/_layout/signedout")({
  component: SignOut,
});

export function SignOut() {
  return (
    <>
      <NavbarOut />
    </>
  );
}
