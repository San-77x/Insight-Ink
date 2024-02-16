import Footer from "@/components/Footer";
import { createRootRoute, Link } from "@tanstack/react-router";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import HomeIn from "@/components/SignedIn/HomeIn";
import { NavbarIn } from "@/components/SignedIn/NavbarIn";
import HomeOut from "@/components/SignedOut/HomeOut";
import { NavbarOut } from "@/components/SignedOut/NavbarOut";

export const Route = createRootRoute({
  component: () => (
    <>
      <SignedIn>
        <NavbarIn />
        <HomeIn />
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <NavbarOut />
        <HomeOut />
      </SignedOut>
      <Footer />
    </>
  ),
});
