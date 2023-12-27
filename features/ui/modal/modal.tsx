/* eslint-disable @next/next/no-img-element */
import styles from "./modal.module.scss";
import { useEffect } from "react";
import classNames from "classnames";
import { Button } from "@features/ui/";

type ModalProps = {
  open: boolean;
  close: () => void;
  action: () => void;
  actionText: string;
  iconSrc: string;
  text: string;
  supportingText: string;
};

export function Modal({
  open,
  close,
  action,
  actionText,
  iconSrc,
  text,
  supportingText,
}: ModalProps) {
  useEffect(() => {
    if (open) {
      document.querySelector("body")?.classList.add(styles.disableScroll);
    } else {
      document.querySelector("body")?.classList.remove(styles.disableScroll);
    }
  }, [open]);
  return (
    <div className={classNames(styles.modalContainer, open && styles.isOpen)}>
      <div className={styles.modalCard}>
        {iconSrc && <img src={iconSrc} alt="" aria-disabled />}
        <h3>{text}</h3>
        {supportingText && <p>{supportingText}</p>}

        <div className={styles.buttonContainer}>
          <Button size="medium" color="gray" onClick={close}>
            Close
          </Button>
          <Button size="medium" color="primary" onClick={action}>
            {actionText}
          </Button>
        </div>
      </div>
    </div>
  );
}
