import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

type CheckboxState = boolean | "indeterminate";

type CommonProps = {
  size?: "small" | "medium";
  label?: string;
  checked?: CheckboxState;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "checked">;

type UncontrolledCheckbox = CommonProps & {
  checked?: never;
  onChange?: never;
};

type ControlledCheckbox = CommonProps & {
  checked: CheckboxState;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

type CheckboxProps = ControlledCheckbox | UncontrolledCheckbox;

export function Checkbox({
  label,
  size,
  checked,
  onChange: handleControlledChange,
  defaultChecked,
  ...props
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [uncontrolledState, setUncontrolledState] =
    useState<CheckboxState>(false);

  const isControlled = checked !== undefined && !!handleControlledChange;

  const handleUncontrolledChange = () => {
    if (defaultChecked) {
      return;
    }
    if (!uncontrolledState) {
      setUncontrolledState(true);
    }
    if (uncontrolledState) {
      setUncontrolledState("indeterminate");
    }
    if (uncontrolledState === "indeterminate") {
      setUncontrolledState(false);
    }
  };

  const handleChecked = () => {
    const uncontrolledChecked = uncontrolledState ? true : false;
    const controlledChecked = checked ? true : false;
    if (defaultChecked) {
      return undefined;
    }

    if (isControlled) {
      return controlledChecked;
    } else {
      return uncontrolledChecked;
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return isControlled
      ? handleControlledChange(e)
      : handleUncontrolledChange();
  };

  useEffect(() => {
    const checkboxLoaded = checkboxRef.current;

    if (checkboxLoaded) {
      if (
        uncontrolledState === "indeterminate" ||
        checked === "indeterminate"
      ) {
        checkboxRef.current.indeterminate = true;
      } else {
        checkboxRef.current.indeterminate = false;
      }
    }
  }, [uncontrolledState, checked]);

  return (
    <>
      <label className={classNames(styles.label, styles[size || ""])}>
        <input
          {...props}
          defaultChecked={defaultChecked}
          className={classNames(styles.checkbox, styles[size || ""])}
          ref={checkboxRef}
          type="checkbox"
          checked={handleChecked()}
          onChange={(e) => handleOnChange(e)}
        />

        {label}
      </label>
    </>
  );
}
