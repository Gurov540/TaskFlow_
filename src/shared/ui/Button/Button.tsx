import type { FC, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}
import "./Button.css";

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg font-medium transition",
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
          "bg-gray-200 hover:bg-gray-300": variant === "secondary",
          "hover:bg-gray-100": variant === "ghost",
        },
        className
      )}
      {...props}
    />
  );
};
