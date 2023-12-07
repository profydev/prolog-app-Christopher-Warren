import Link from "next/link";
import styles from "./footer-navigation.module.scss";

import { useGetVersion } from "../api/use-get-version";

import SmallLogo from "@assets/icons/logo-small.svg";

export function FooterNavigation() {
  const { data } = useGetVersion();

  return (
    <footer className={styles.footer}>
      <div className={styles.anchorContainer}>
        <Link href="#">Docs</Link>
        <Link href="#">API</Link>
        <Link href="#">Help</Link>
        <Link href="#">Community</Link>
      </div>
      <div className={styles.logoContainer}>
        <SmallLogo className={styles.logo} />
      </div>
      <div className={styles.version}>Version: {data?.version}</div>
    </footer>
  );
}
