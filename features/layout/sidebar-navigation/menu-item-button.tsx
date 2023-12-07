import React from "react";
import { Button } from "@features/ui";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  className?: string;
  text: string;
  IconComponent: React.FC<{ className?: string }>;
  onClick: () => void;
  isCollapsed: boolean;
};

export function MenuItemButton({
  className,
  text,
  onClick,
  IconComponent,
  isCollapsed,
}: MenuItemProps) {
  return (
    <li className={classNames(styles.listItem, className)}>
      <Button className={styles.anchor} onClick={onClick}>
        {IconComponent && <IconComponent className={styles.icon} />}
        {!isCollapsed && text}{" "}
      </Button>
    </li>
  );
}
