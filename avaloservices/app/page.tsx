import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Coming Soon",
  description:
    "Our new website is currently under development and will be launching soon.",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <p className={styles.label}>Something New Is Coming</p>
        <h1 className={styles.title}>Coming Soon.</h1>
        <p className={styles.description}>
          We&apos;re working on something exciting. Our new website is currently
          under development and will be launching soon.
        </p>
        <div className={styles.line} aria-hidden="true" />
        <p className={styles.footer}>Stay tuned for updates.</p>
      </div>
    </main>
  );
}
