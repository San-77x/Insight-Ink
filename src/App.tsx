import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
  SignUpButton,
  SignIn,
} from "@clerk/clerk-react";
import { Navbar } from "./components/SignedIn/Navbar";
import Footer from "./components/Footer";
import { redirect } from "@tanstack/react-router";
import Home from "./routes/home";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <SignUpButton />
        <SignIn />
        <SignedOut>
          <Home />
        </SignedOut>
        <SignedIn>
          <Home />
        </SignedIn>
      </main>
      <SignOutButton signOutCallback={() => redirect("/")} />
      <SignInButton />
      <Footer />
    </div>
  );
}

export default App;
