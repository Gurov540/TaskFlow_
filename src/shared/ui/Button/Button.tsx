import React from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "success";
  size?: "small" | "medium" | "large";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = "primary", size = "medium", className, ...rest }, ref) => (
    <button
      ref={ref}
      className={clsx(styles.button, styles[color], styles[size], className)}
      {...rest}
    />
  )
);
