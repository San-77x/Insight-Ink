import Footer from "@/components/Footer";
import { Navbar } from "@/components/SignedIn/NavbarIn";
import {
  SignedOut,
  SignedIn,
  SignOutButton,
  SignInButton,
  SignIn,
  SignUpButton,
} from "@clerk/clerk-react";
import { createLazyFileRoute } from "@tanstack/react-router";
import Home from "./home";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <SignUpButton />
      <SignOutButton />
      <SignedIn>
        <Home />
      </SignedIn>
      {/* <SignOutButton signOutCallback={redirect("/")} /> */}
    </div>
  );
}
