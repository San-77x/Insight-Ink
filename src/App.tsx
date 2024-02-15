import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Canvas from "./pages/Canvas";
import Card from "./components/Card";
import FeaturedCard from "./components/FeaturedCard";

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
