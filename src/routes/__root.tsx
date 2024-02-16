import Footer from "@/components/Footer";
import { Navbar } from "@/components/SignedIn/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { SignOut } from "./_layout/signedout.lazy";

export const Route = createRootRoute({
  component: () => (
    <>
      <SignOut />
      <Outlet />
      <Footer />
    </>
  ),
});

{
  /* <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div> */
}
