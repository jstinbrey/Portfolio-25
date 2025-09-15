import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainScreen } from "./screens/MainScreen/MainScreen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MainScreen />
  </StrictMode>,
);
