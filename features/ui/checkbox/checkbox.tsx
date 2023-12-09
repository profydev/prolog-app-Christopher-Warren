import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

type CheckboxProps = {
  size?: "small" | "medium";
  label?: string;
  state?: CheckboxState;
};
type CheckboxState = "false" | "true" | "indeterminate";

export function Checkbox({ size, label, state }: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [checkboxState, setCheckboxState] = useState<CheckboxState>(
    state || "false",
  );

  useEffect(() => {
    const notIndeterminate = checkboxRef.current?.indeterminate === false;

    if (notIndeterminate) {
      if (checkboxState === "indeterminate") {
        checkboxRef.current.indeterminate = true;
      } else {
        checkboxRef.current.indeterminate = false;
      }
    }
  }, [checkboxState]);

  const handleChange = () => {
    if (checkboxState === "false") {
      setCheckboxState("true");
    }
    if (checkboxState === "true") {
      setCheckboxState("indeterminate");
    }
    if (checkboxState === "indeterminate") {
      setCheckboxState("false");
    }
  };

  const checked = checkboxState === "true" ? true : false;

  return (
    <>
      <label className={classNames(styles.label, styles[size || ""])}>
        <input
          className={classNames(styles.checkbox, styles[size || ""])}
          type="checkbox"
          checked={checked}
          ref={checkboxRef}
          onChange={handleChange}
        />
        {label}
      </label>
    </>
  );
}
