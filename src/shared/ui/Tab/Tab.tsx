import React from "react";
import clsx from "clsx";
import styles from "./Tab.module.css";

export interface TabProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Универсальный таб (вкладка)
 * Можно использовать в Sidebar, Dashboard, Settings и т.д.
 */
export const Tab: React.FC<TabProps> = ({
  label,
  icon,
  active = false,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        styles.tab,
        active && styles.active,
        disabled && styles.disabled
      )}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </button>
  );
};
