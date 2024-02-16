import HomeIn from "@/components/SignedIn/HomeIn";
import { NavbarIn } from "@/components/SignedIn/NavbarIn";
import HomeOut from "@/components/SignedOut/HomeOut";
import { NavbarOut } from "@/components/SignedOut/NavbarOut";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/signedin")({
  component: SignIn,
});

export function SignIn() {
  return (
    <>
      <NavbarOut />
      <HomeOut />
    </>
  );
}
