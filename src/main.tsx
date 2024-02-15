import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={
        "pk_test_ZmxleGlibGUtdGVycmllci0yNy5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
