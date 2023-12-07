import { Button } from "@features/ui";
import styles from "./project-card-error.module.scss";

import ErrorIcon from "@assets/icons/alert-circle.svg";
import ArrowIcon from "@assets/icons/arrow-left.svg";

export function ProjectCardError() {
  return (
    <div className={styles.container}>
      <div className={styles.errorMessage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <ErrorIcon className={styles.errorIcon} />

        <span>There was a problem while loading the project data</span>
      </div>

      <Button className={styles.errorButton}>
        <span>Try again</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}

        <ArrowIcon
          className={styles.arrowIcon}
          src="/icons/arrow-left.svg"
          alt=""
          height="20"
          width="20"
        />
      </Button>
    </div>
  );
}
