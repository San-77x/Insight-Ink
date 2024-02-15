import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <SignedOut>
          <Home />
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <Home />
          <SignOutButton signOutCallback={() => redirect("/")} />
        </SignedIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;
