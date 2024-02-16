import { createLazyFileRoute } from "@tanstack/react-router";
import { NavbarOut } from "@/components/SignedOut/NavbarOut";
import HomeOut from "@/components/SignedOut/HomeOut";

export const Route = createLazyFileRoute("/_layout/signedout")({
  component: SignOut,
});

export function SignOut() {
  return (
    <>
      <NavbarOut />
      <HomeOut />
    </>
  );
}
