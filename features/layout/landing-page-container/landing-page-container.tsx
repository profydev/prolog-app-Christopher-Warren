import { HorizontalNavigation } from "@features/layout/";
import styles from "./landing-page-container.module.scss";

export function LandingPageContainer() {
  return (
    <div className={styles.mainContainer}>
      <HorizontalNavigation />
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
}
