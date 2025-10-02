import { useState, useCallback } from "react";

export const useAuthModal = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const openAuthModal = useCallback((mode: "login" | "register") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const switchAuthMode = useCallback(() => {
    setAuthMode((prev) => (prev === "login" ? "register" : "login"));
  }, []);

  const openLoginModal = useCallback(() => {
    openAuthModal("login");
  }, [openAuthModal]);

  const openRegisterModal = useCallback(() => {
    openAuthModal("register");
  }, [openAuthModal]);

  return {
    isAuthModalOpen,
    authMode,
    openAuthModal,
    openLoginModal,
    openRegisterModal,
    closeAuthModal,
    switchAuthMode,
  };
};
