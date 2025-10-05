import React from "react";
import clsx from "clsx";
import * as LucideIcons from "lucide-react";
import styles from "./Icon.module.css";

export interface IconProps {
  /** Название иконки (можно 'LayoutDashboard' или 'layout-dashboard') */
  name: string;
  /** Размер иконки */
  size?: number;
  /** Цвет */
  color?: string;
  /** Дополнительные классы */
  className?: string;
}

/**
 * Универсальный компонент Icon
 * Поддерживает имена иконок в форматах PascalCase и kebab-case.
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color = "currentColor",
  className,
}) => {
  // Функция для преобразования kebab-case → PascalCase
  const toPascalCase = (str: string): string =>
    str
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join("");

  // Приводим имя к нужному формату
  const normalizedName = toPascalCase(name) as keyof typeof LucideIcons;

  const LucideIcon = LucideIcons[normalizedName] as React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;

  if (!LucideIcon) {
    console.warn(
      `⚠️ Icon "${name}" (normalized: "${normalizedName}") not found in lucide-react`
    );
    return null;
  }

  return (
    <LucideIcon
      size={size}
      color={color}
      className={clsx(styles.icon, className)}
    />
  );
};
