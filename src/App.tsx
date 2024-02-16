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
import { LayoutComponent } from "./routes/_layout";

function App() {
  return (
    <div>
      <SignOutButton signOutCallback={() => redirect("/")} />
      <SignInButton />
      <Footer />
    </div>
  );
}

export default App;
