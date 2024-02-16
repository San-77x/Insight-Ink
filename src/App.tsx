import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
  SignUpButton,
} from "@clerk/clerk-react";
import Footer from "./components/Footer";
import { redirect } from "@tanstack/react-router";
import Home from "./routes/home";
import { SignIn } from "./routes/_layout/signedin.lazy";
import { SignOut } from "./routes/_layout/signedout.lazy";

function App() {
  return (
    <div>
      <SignIn />
      <SignOut />
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
