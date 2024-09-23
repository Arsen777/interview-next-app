"use client";

import { useRouter } from "next/navigation";

import styles from "./LanguageSwitcher.module.scss";

function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (lang: "en" | "ru") => {
    router.push(`/${lang}`);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button className={styles.button} onClick={() => changeLanguage("en")}>
        English
      </button>
      <button className={styles.button} onClick={() => changeLanguage("ru")}>
        Russian
      </button>
    </div>
  );
}

export default LanguageSwitcher;
