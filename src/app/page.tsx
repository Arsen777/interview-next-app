import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Home Page</h1>
      <p>This page is statically generated at build time.</p>
    </div>
  );
}
