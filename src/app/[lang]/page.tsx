"use client";

import { useTranslation } from "next-i18next";

import styles from "./page.module.scss";

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.container}>
      <h1>{t('welcome')}</h1>
    </div>
  );
};

export default Home;
