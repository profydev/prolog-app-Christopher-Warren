/* eslint-disable @next/next/no-img-element */
import React, { useState, MouseEventHandler, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./select.module.scss";

type Option = {
  id: string;
  value: string;
};

type SelectProps = {
  optionsList: Option[];
  logoSrc?: string;
  label?: string;
  hint?: string;
  error?: Error;
};

export function Select({
  optionsList,
  logoSrc,
  label,
  error,
  hint,
}: SelectProps) {
  const [toggleSelect, setToggleSelect] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Option | null>(null);

  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      console.log(selectRef.current?.parentNode);
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setToggleSelect(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => document.removeEventListener("mousedown", handleMouseDown);
  });

  const handleToggleSelect: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setToggleSelect(!toggleSelect);
  };

  const handleSelectValue = (option: Option) => {
    setSelectedValue(option);
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
        <span className={styles.label}>{label}</span>
        <button
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
            {selectedValue?.value || "Select team member"}
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
        {renderOptions()}
      </ul>
    </div>
  );
}
