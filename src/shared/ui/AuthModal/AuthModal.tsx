import React, { useEffect } from "react";
import styles from "./AuthModal.module.css";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "register";
  onSwitchMode: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  mode,
  onSwitchMode,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <h2>{mode === "login" ? "Вход" : "Регистрация"}</h2>

        <form className={styles.form}>
          {mode === "register" && (
            <input type="text" placeholder="Имя" className={styles.input} />
          )}
          <input type="email" placeholder="Email" className={styles.input} />
          <input
            type="password"
            placeholder="Пароль"
            className={styles.input}
          />

          <button type="submit" className={styles.submitButton}>
            {mode === "login" ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>

        <div className={styles.switchMode}>
          {mode === "login" ? "Нет аккаунта?" : "Уже есть аккаунт?"}
          <button onClick={onSwitchMode} className={styles.switchButton}>
            {mode === "login" ? "Зарегистрироваться" : "Войти"}
          </button>
        </div>
      </div>
    </div>
  );
};
