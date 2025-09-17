import React from "react";
import styles from "./Logo.module.css";
import logo from "../../../assets/logo/react.svg";

export const Logo: React.FC = () => {
  return <img className={styles.header} src={logo} alt="Logo" />;
};
