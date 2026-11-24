import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Style
import "@biaslayar/shared/styles";
import "./main.css";
// App
import { App } from "@/app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
