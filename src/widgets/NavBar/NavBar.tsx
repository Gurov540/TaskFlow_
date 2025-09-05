import type { FC } from "react";
import { NavLink } from "@/shared/ui/NavLink";
import { Button } from "@/shared/ui/Button";

export const NavBar: FC = () => {
  return (
    <nav className="w-full flex items-center justify-between bg-white shadow px-6 py-3">
      <div className="flex space-x-4">
        <NavLink to="/" label="Главная" />
        <NavLink to="/about" label="О проекте" />
        <NavLink to="/contact" label="Контакты" />
      </div>

      <div className="flex space-x-2">
        <Button variant="secondary">Войти</Button>
        <Button variant="primary">Регистрация</Button>
      </div>
    </nav>
  );
};
