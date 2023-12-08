import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "" | "small" | "medium" | "large" | "xlarge";
  color?:
    | ""
    | "primary"
    | "secondary"
    | "gray"
    | "empty"
    | "empty-gray"
    | "error"
    | "empty-error";
  icon?: JSX.Element;
  iconPosition?: "leading" | "trailing";
}

export function Button({
  size = "",
  color = "",
  icon,
  iconPosition = "leading",
  children,
  ...props
}: ButtonProps) {
  const hasIcon = icon ? "hasIcon" : "";
  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        props.className,
        styles[size],
        styles[color],
        styles[hasIcon],
      )}
    >
      {iconPosition === "leading" && icon}
      {children}
      {iconPosition === "trailing" && icon}
    </button>
  );
}
