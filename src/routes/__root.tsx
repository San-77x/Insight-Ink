import Footer from "@/components/Footer";
import { createRootRoute, Link } from "@tanstack/react-router";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";

export const Route = createRootRoute({
  component: () => (
    <>
      <SignedIn>
        <Link to="/signedin" />
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link to="/signedout" />
      </SignedOut>
      <Footer />
    </>
  ),
});
