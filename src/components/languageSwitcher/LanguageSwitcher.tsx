"use client";

import React from 'react'; // Import React
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { setLanguage } from "../../store/slices/languageSlice";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const router = useRouter();
  const language = useSelector((state: RootState) => state.language.lang);

  const changeLanguage = (lng: string) => {
    if (i18n) {
      i18n
        .changeLanguage(lng)
        .then(() => {
          dispatch(setLanguage(lng));
          router.push(`/${lng}`);
        })
        .catch((error) => {
          console.error("Error changing language:", error);
        });
    }
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")} disabled={language === "en"}>
        English
      </button>
      <button onClick={() => changeLanguage("ru")} disabled={language === "ru"}>
        Russian
      </button>
      <p>Current Language: {language}</p>
    </div>
  );
};

export default LanguageSwitcher;
