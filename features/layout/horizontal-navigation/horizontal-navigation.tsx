/* eslint-disable @next/next/no-img-element */

import { Routes } from "@config/routes";
import styles from "./horizontal-navigation.module.scss";
import { Button } from "@features/ui";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";

const menuItems = [
  { text: "Home", href: Routes.home },
  { text: "Products", href: Routes.products },
  { text: "Documentation", href: Routes.docs },
  { text: "Pricing", href: Routes.pricing },
];

export function HorizontalNavigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mappedMenuItems = () =>
    menuItems.map((item) => (
      <Link key={item.href} href={item.href} className={styles.menuItem}>
        {item.text}
      </Link>
    ));

  return (
    <header className={styles.header}>
      <div>
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
      </div>

      <div className={styles.desktopMenuItems}>{mappedMenuItems()}</div>
      <div className={styles.dashboardLinkContainer}>
        <Button className={styles.dashboardLink} color="primary" size="large">
          <Link href={Routes.projects}>Open Dashboard</Link>
        </Button>
      </div>
      {/* Toggle Mobile Menu */}
      <button
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className={styles.toggleNav}
      >
        <img
          src="/icons/hamburger.svg"
          alt={isMobileMenuOpen ? "close menu" : "open menu"}
        />
      </button>
      {/*  Mobile Menu */}
      <div
        className={classNames(
          styles.mobileMenuItems,
          isMobileMenuOpen && styles.open,
        )}
      >
        <Button className={styles.dashboardLink} color="primary" size="large">
          <Link href={Routes.projects}>Open Dashboard</Link>
        </Button>
        {mappedMenuItems()}
      </div>
    </header>
  );
}
