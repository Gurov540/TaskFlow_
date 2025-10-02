import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./widgets/Header";
import { GeneralPage } from "./pages/GeneralPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <GeneralPage></GeneralPage>
  </StrictMode>
);
