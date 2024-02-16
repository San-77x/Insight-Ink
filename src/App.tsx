import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
  SignUpButton,
  SignIn,
} from "@clerk/clerk-react";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

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
