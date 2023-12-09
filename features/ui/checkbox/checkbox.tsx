import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

interface CommonProps {
  size?: "small" | "medium";
  label?: string;
}
type CheckboxState = "false" | "true" | "indeterminate";

interface ControlledCheckbox extends CommonProps {
  state?: never;
  onChange?: never;
}
interface UncontrolledCheckbox extends CommonProps {
  state: CheckboxState;
  onChange: () => void;
}
type CheckboxProps = ControlledCheckbox | UncontrolledCheckbox;

// interface CheckboxProps {
//   size?: "small" | "medium";
//   label?: string;
//   state?: CheckboxState;
//   onChange?: () => void;
// }

export function Checkbox({ label, size, state, onChange }: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [uncontrolledState, setUncontrolledState] =
    useState<CheckboxState>("false");

  useEffect(() => {
    const notIndeterminate = checkboxRef.current?.indeterminate === false;

    if (notIndeterminate) {
      if (uncontrolledState === "indeterminate" || state === "indeterminate") {
        checkboxRef.current.indeterminate = true;
      } else {
        checkboxRef.current.indeterminate = false;
      }
    }
  }, [uncontrolledState, state]);

  const uncontrolledHandler = () => {
    if (uncontrolledState === "false") {
      setUncontrolledState("true");
    }
    if (uncontrolledState === "true") {
      setUncontrolledState("indeterminate");
    }
    if (uncontrolledState === "indeterminate") {
      setUncontrolledState("false");
    }
  };

  const uncontrolledChecked = uncontrolledState === "true" ? true : false;

  const controlledChecked = state === "true" ? true : false;

  const isControlled = !!state && !!onChange;

  return (
    <>
      <label className={classNames(styles.label, styles[size || ""])}>
        <input
          className={classNames(styles.checkbox, styles[size || ""])}
          ref={checkboxRef}
          type="checkbox"
          checked={isControlled ? controlledChecked : uncontrolledChecked}
          onChange={isControlled ? onChange : uncontrolledHandler}
        />
        {label}
      </label>
    </>
  );
}
