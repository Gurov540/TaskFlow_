import type { FC } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";

interface Props {
  to: string;
  label: string;
}

export const NavLink: FC<Props> = ({ to, label }) => (
  <RouterLink
    to={to}
    className={({ isActive }) =>
      clsx(
        "px-3 py-2 rounded-md text-sm font-medium transition",
        isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
      )
    }
  >
    {label}
  </RouterLink>
);
