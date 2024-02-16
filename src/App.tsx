import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Canvas from "./pages/Canvas";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Canvas />
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
