import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
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
