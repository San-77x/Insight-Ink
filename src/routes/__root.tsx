import Footer from "@/components/Footer";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { NavbarIn } from "@/components/SignedIn/NavbarIn";
import HomeIn from "@/components/SignedIn/HomeIn";
import { NavbarOut } from "@/components/SignedOut/NavbarOut";
import HomeOut from "@/components/SignedOut/HomeOut";

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

{
  /* <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div> */
}
