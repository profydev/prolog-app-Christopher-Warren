/* eslint-disable @next/next/no-img-element */
import React, { InputHTMLAttributes, useRef } from "react";
import classNames from "classnames";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  hint?: string;
  iconSrc?: string;
  error?: Error;
}

export function Input({
  disabled,
  label,
  hint,
  iconSrc,
  error,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label className={styles.label}>
        {label && <span>{label}</span>}
        <div
          className={classNames(
            styles.inputContainer,
            disabled && styles.disabled,
            error && styles.error,
          )}
        >
          {iconSrc && (
            <img className={styles.icon} src={iconSrc} alt="" aria-disabled />
          )}
          <input
            {...props}
            disabled={disabled}
            placeholder="olivia@untitledui.com"
            className={classNames(styles.input)}
            ref={inputRef}
          />
          {error && (
            <img
              className={styles.icon}
              src="/icons/alert-circle.svg"
              alt=""
              aria-disabled
            />
          )}
        </div>
      </label>
      {hint && !error && <span className={styles.hint}>{hint}</span>}
      {error && (
        <span className={classNames(styles.error, styles.hint)}>
          {error.message}
        </span>
      )}
    </div>
  );
}
