import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { UserLogin } from "./pages/Login2";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserLogin />
    <Login />
    <Home />
  </React.StrictMode>
);
