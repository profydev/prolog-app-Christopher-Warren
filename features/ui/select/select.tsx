/* eslint-disable @next/next/no-img-element */
import React, { useState, MouseEventHandler, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./select.module.scss";
import { Option, SelectProps } from "@features/ui/";
import { capitalize } from "lodash";

export function Select({
  optionsList,
  logoSrc,
  label,
  error,
  hint,
  disabled,
  placeholder,
  onChange,
  onReset,
  selectedValue,
}: SelectProps) {
  const [toggleSelect, setToggleSelect] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  // Handle closing dropdown when clicking outside element
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (disabled) return;
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setToggleSelect(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => document.removeEventListener("mousedown", handleMouseDown);
  });

  const handleToggleSelect: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (disabled) return;
    setToggleSelect(!toggleSelect);
  };

  const handleSelectValue = (option: Option) => {
    if (disabled) return;
    if (!onChange) return;
    onChange(option);
    setToggleSelect(false);
  };
  const handleReset = () => {
    if (disabled) return;
    if (!onReset) return;
    onReset();
    setToggleSelect(false);
  };

  const renderOptions = () => {
    return optionsList.map((option) => {
      const isSelected = option.value === selectedValue?.value;
      return (
        <li key={option.id}>
          <button
            tabIndex={0}
            className={classNames(isSelected && styles.isSelected)}
            onClick={() => handleSelectValue(option)}
          >
            {option.value}
            {isSelected && (
              <img src="/icons/check-large.svg" alt="" aria-disabled />
            )}
          </button>
        </li>
      );
    });
  };

  return (
    <div ref={selectRef} className={styles.mainContainer}>
      <label>
        {label && <span className={styles.label}>{label}</span>}
        <button
          disabled={disabled}
          onClick={handleToggleSelect}
          className={classNames(
            styles.dropdown,

            !selectedValue && styles.placeholder,
            error && styles.hasError,
          )}
        >
          <div className={styles.content}>
            {logoSrc && (
              <img src={logoSrc} className={styles.icon} alt="" aria-disabled />
            )}
            {capitalize(selectedValue?.value) || placeholder}
          </div>

          <img src="/icons/chevron-down.svg" alt="" aria-disabled />
        </button>
      </label>
      {!error && !toggleSelect && hint && (
        <span className={styles.hint}>{hint}</span>
      )}
      {!toggleSelect && error && (
        <span className={styles.error}>{error.message}</span>
      )}
      <ul
        className={classNames(
          toggleSelect && styles.show,
          !selectedValue && styles.placeholder,
          styles.optionsContainer,
        )}
      >
        {onReset && (
          <li>
            <button
              tabIndex={0}
              className={classNames(styles.reset)}
              onClick={handleReset}
            >
              {placeholder}
            </button>
          </li>
        )}
        {renderOptions()}
      </ul>
    </div>
  );
}
