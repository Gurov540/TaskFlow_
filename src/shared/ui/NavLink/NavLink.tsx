import React from "react";
import clsx from "clsx";
import styles from "./NavLink.module.css";

export interface NavLinkProps
  extends React.ButtonHTMLAttributes<HTMLInputElement> {
  color?: "primary" | "success" | "info" | "warning" | "error";
  size?: "small" | "medium" | "large";
}

export const NavLink = React.forwardRef<HTMLInputElement, NavLinkProps>(
  ({ color = "primary", size = "medium", className, ...rest }, ref) => (
    <NavLink
      ref={ref}
      className={clsx(styles.button, styles[color], styles[size], className)}
      {...rest}
    />
  )
);

NavLink.displayName = "NavLink";
