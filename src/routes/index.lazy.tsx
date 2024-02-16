import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
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
      <Navbar />
      <main>
        <SignUpButton />
        <SignedIn>
          <Home />
        </SignedIn>
        {/* <SignOutButton signOutCallback={redirect("/")} /> */}
      </main>
      <Footer />
    </div>
  );
}
