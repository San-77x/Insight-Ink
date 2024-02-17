import { createLazyFileRoute } from "@tanstack/react-router";
import HomeIn from "@/components/HomeIn";
import HomeOut from "@/components/HomeOut";
import { SignedIn, SignOutButton, SignedOut } from "@clerk/clerk-react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SignedIn>
        <HomeIn />
      </SignedIn>
      <SignedOut>
        <HomeOut />
      </SignedOut>
    </div>
  );
}
