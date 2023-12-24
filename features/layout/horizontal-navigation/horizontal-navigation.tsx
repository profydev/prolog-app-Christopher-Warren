import { Routes } from "@config/routes";
import styles from "./horizontal-navigation.module.scss";
export function HorizontalNavigation() {
  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/logo-large.svg" alt="Prolog logo" />
      <a href={Routes.projects}>Dashboard</a>
    </header>
  );
}
