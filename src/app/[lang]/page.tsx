"use client";

import { useParams } from "next/navigation";

import styles from "./page.module.scss";

export default function Home() {
  const { lang } = useParams();

  return (
    <div className={styles.container}>
      <h1>Welcome to the Home Page</h1>
      <p>This page is statically generated at build time.</p>
    </div>
  );
}
