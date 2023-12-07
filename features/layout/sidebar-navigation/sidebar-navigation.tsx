import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Routes } from "@config/routes";
import classNames from "classnames";
import { NavigationContext } from "./navigation-context";
import { MenuItemButton } from "./menu-item-button";
import { MenuItemLink } from "./menu-item-link";
import { Button } from "@features/ui";
import styles from "./sidebar-navigation.module.scss";

import SupportIcon from "@assets/icons/support.svg";
import ArrowLeftIcon from "@assets/icons/arrow-left.svg";

import ProjectsIcon from "@assets/icons/projects.svg";
import IssuesIcon from "@assets/icons/issues.svg";
import AlertIcon from "@assets/icons/alert.svg";
import UsersIcon from "@assets/icons/users.svg";
import SettingsIcon from "@assets/icons/settings.svg";
import CloseIcon from "@assets/icons/close.svg";
import MenuIcon from "@assets/icons/menu.svg";

import LogoSmall from "@assets/icons/logo-small.svg";
import LogoLarge from "@assets/icons/logo-large.svg";

const menuItems = [
  {
    text: "Projects",
    IconComponent: ProjectsIcon,
    href: Routes.projects,
  },
  { text: "Issues", IconComponent: IssuesIcon, href: Routes.issues },
  { text: "Alerts", IconComponent: AlertIcon, href: Routes.alerts },
  { text: "Users", IconComponent: UsersIcon, href: Routes.users },
  {
    text: "Settings",
    IconComponent: SettingsIcon,
    href: Routes.settings,
  },
];

export function SidebarNavigation() {
  const router = useRouter();
  const { isSidebarCollapsed, toggleSidebar } = useContext(NavigationContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={classNames(
        styles.container,
        isSidebarCollapsed && styles.isCollapsed,
      )}
    >
      <div
        className={classNames(
          styles.fixedContainer,
          isSidebarCollapsed && styles.isCollapsed,
        )}
      >
        <header className={styles.header}>
          {isSidebarCollapsed ? (
            <LogoSmall className={styles.logo} />
          ) : (
            <LogoLarge className={styles.logo} />
          )}

          <LogoLarge className={styles.logoMobile} />

          <Button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.menuButton}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </header>
        <div
          className={classNames(
            styles.menuOverlay,
            isMobileMenuOpen && styles.isMobileMenuOpen,
          )}
        />
        <nav
          className={classNames(
            styles.nav,
            isMobileMenuOpen && styles.isMobileMenuOpen,
          )}
        >
          <ul className={styles.linkList}>
            {menuItems.map((menuItem, index) => (
              <MenuItemLink
                key={index}
                {...menuItem}
                isCollapsed={isSidebarCollapsed}
                isActive={router.pathname === menuItem.href}
              />
            ))}
          </ul>
          <ul className={styles.list}>
            <MenuItemLink
              text="Support"
              IconComponent={SupportIcon}
              isCollapsed={isSidebarCollapsed}
              isActive={false}
              href="mailto:support@prolog-app.com?subject=Support Request:"
            />

            <MenuItemButton
              text="Collapse"
              IconComponent={ArrowLeftIcon}
              isCollapsed={isSidebarCollapsed}
              onClick={() => toggleSidebar()}
              className={classNames(
                styles.collapseMenuItem,
                isSidebarCollapsed && styles.isCollapsed,
              )}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
}
