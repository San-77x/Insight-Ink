import HomeIn from "@/components/SignedIn/HomeIn";
import { NavbarIn } from "@/components/SignedIn/NavbarIn";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/signedin")({
  component: SignIn,
});

export function SignIn() {
  return (
    <>
      <NavbarIn />
      <HomeIn />
    </>
  );
}
