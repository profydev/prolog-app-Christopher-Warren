/* eslint-disable @next/next/no-img-element */

import { Section } from "@api/landing.types";
import styles from "./hero-section.module.scss";
import classNames from "classnames";

type HeroProps = {
  data: Section;
};

export function HeroSection({ data }: HeroProps) {
  // Design doesn't include this word.
  // remove it
  const designTitle = data.title.replace("Application", "");
  return (
    <div className={classNames(styles.heroSection, styles[data.theme])}>
      <div className={styles.heading}>
        <h1 className={styles.heroTitle}>{designTitle}</h1>
        <p className={styles.heroSubtitle}>{data.subtitle}</p>
      </div>

      <div className={styles.imageContainer}>
        <img
          width={data.image?.width}
          height={data.image?.height}
          className={styles.heroImage}
          src={data.image?.src}
          alt=""
        />
      </div>
    </div>
  );
}
