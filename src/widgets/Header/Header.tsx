import React from "react";
import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button/";
import { Logo } from "../../shared/ui/Logo/";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo></Logo>
        <span>MyApp</span>
      </div>
      <nav className={styles.nav}>
        <Button color="primary" size="medium">
          Войти
        </Button>
        <Button color="success" size="medium">
          Регистрация
        </Button>
      </nav>
    </header>
  );
};
