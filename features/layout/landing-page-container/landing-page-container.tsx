import { HorizontalNavigation } from "@features/layout/";
import styles from "./landing-page-container.module.scss";
import Head from "next/head";

export function LandingPageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prolog</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HorizontalNavigation />

      <main>
        <div className={styles.contentContainer}>{children}</div>
      </main>
    </div>
  );
}
