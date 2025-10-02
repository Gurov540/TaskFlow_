import React, { useState } from "react";
import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button";
import { Logo } from "../../shared/ui/Logo";
import { AuthModal } from "../../shared/ui/AuthModal";

export const Header: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const handleLoginClick = () => {
    setAuthMode("login");
    setIsAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthMode("register");
    setIsAuthModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleSwitchMode = () => {
    setAuthMode((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <Button color="primary" size="medium" onClick={handleLoginClick}>
            Login
          </Button>
          <Button color="success" size="medium" onClick={handleRegisterClick}>
            Registration
          </Button>
        </nav>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={handleCloseModal}
        mode={authMode}
        onSwitchMode={handleSwitchMode}
      />
    </>
  );
};
