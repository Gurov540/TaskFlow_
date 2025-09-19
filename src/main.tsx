import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Header } from "./widgets/Header";
import { GeneralPage } from "./pages/GeneralPage";
import { LogRegPage } from "./pages/LogRegPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GeneralPage />} />
        <Route path="/about" element={<LogRegPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
