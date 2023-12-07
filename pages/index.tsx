import { Routes } from "@config/routes";
import styles from "./index.module.scss";

import ContactIcon from "@assets/icons/support.svg";
import LogoLarge from "@assets/icons/logo-large.svg";

const IssuesPage = () => {
  return (
    <div>
      <header className={styles.header}>
        <LogoLarge />
        <a href={Routes.projects}>Dashboard</a>
      </header>
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        <ContactIcon style={{ color: "white" }} />
      </button>
    </div>
  );
};

export default IssuesPage;
