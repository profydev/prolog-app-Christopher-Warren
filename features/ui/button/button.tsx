/* eslint-disable @next/next/no-img-element */
import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large" | "xlarge";
  color?:
    | "primary"
    | "secondary"
    | "gray"
    | "empty"
    | "empty-gray"
    | "error"
    | "empty-error";
  iconSrc?: string;
  iconPosition?: "leading" | "trailing";
}

export function Button({
  size,
  color,
  iconSrc,
  iconPosition = "leading",
  children,
  ...props
}: ButtonProps) {
  const hasIcon = iconSrc ? "hasIcon" : "";

  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        props.className,
        styles[size || ""],
        styles[color || ""],
        styles[hasIcon],
      )}
    >
      {iconSrc && iconPosition === "leading" && (
        <img aria-disabled alt="" src={iconSrc} />
      )}
      {children}
      {iconSrc && iconPosition === "trailing" && (
        <img aria-disabled alt="" src={iconSrc} />
      )}
    </button>
  );
}
