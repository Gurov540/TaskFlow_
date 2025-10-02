import React from "react";
import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button";
import { Logo } from "../../shared/ui/Logo";
import { useAuthModal } from "../../shared/lib/hooks/useAuthModal";
import { AuthModal } from "../../shared/ui/AuthModal";

export const Header: React.FC = () => {
  const authModal = useAuthModal();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <Button
            color="primary"
            size="medium"
            onClick={authModal.openLoginModal}
          >
            Login
          </Button>
          <Button
            color="success"
            size="medium"
            onClick={authModal.openRegisterModal}
          >
            Registration
          </Button>
        </nav>
      </header>

      <AuthModal
        isOpen={authModal.isAuthModalOpen}
        onClose={authModal.closeAuthModal}
        mode={authModal.authMode}
        onSwitchMode={authModal.switchAuthMode}
      />
    </>
  );
};
