import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Home from "@/pages/Home";
import {
  SignedOut,
  SignedIn,
  SignOutButton,
  SignInButton,
} from "@clerk/clerk-react";
import { createLazyFileRoute, redirect } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <main>
        <SignedOut>
          <Home />
        </SignedOut>
        <SignedIn>
          <Home />
        </SignedIn>
      </main>
      <SignOutButton signOutCallback={() => redirect("/")} />
      <SignInButton />
    </div>
  );
}
