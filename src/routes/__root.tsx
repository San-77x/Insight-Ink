import Footer from "@/components/Footer";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import HomeIn from "@/components/HomeIn";
import { NavbarIn } from "@/components/NavbarIn";
import HomeOut from "@/components/HomeOut";
import { NavbarOut } from "@/components/NavbarOut";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen">
      <SignedIn>
        <NavbarIn />
      </SignedIn>
      <SignedOut>
        <NavbarOut />
      </SignedOut>
      <Outlet />
      <Footer />
    </div>
  ),
});
