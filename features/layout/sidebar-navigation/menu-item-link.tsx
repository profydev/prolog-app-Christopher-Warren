import Link from "next/link";
import React from "react";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  text: string;
  IconComponent?: React.FC<{ className?: string }>;
  href: string;
  isActive: boolean;
  isCollapsed: boolean;
};

export function MenuItemLink({
  text,
  href,
  IconComponent,
  isActive,
  isCollapsed,
}: MenuItemProps) {
  return (
    <li className={classNames(styles.listItem, isActive && styles.active)}>
      <Link className={styles.anchor} href={href}>
        {IconComponent && <IconComponent className={styles.icon} />}
        {!isCollapsed && text}
      </Link>
    </li>
  );
}
