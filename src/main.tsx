import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ClerkProvider
        publishableKey={
          "pk_test_ZmxleGlibGUtdGVycmllci0yNy5jbGVyay5hY2NvdW50cy5kZXYk"
        }
      >
        <RouterProvider router={router} />
      </ClerkProvider>
    </StrictMode>
  );
}

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import "./index.css";
// import { ClerkProvider } from "@clerk/clerk-react";
// import { RouterProvider, createRouter } from "@tanstack/react-router";
// import { routeTree } from "./routeTree.gen";

// const router = createRouter({ routeTree });
// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//  <ClerkProvider
//   publishableKey={
//     "pk_test_ZmxleGlibGUtdGVycmllci0yNy5jbGVyay5hY2NvdW50cy5kZXYk"
//   }
// >
//    <RouterProvider router={router} />
//   {" "}
// </ClerkProvider>;
//  </React.StrictMode>
