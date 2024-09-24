import { useEffect } from "react";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useDispatch } from "react-redux";

import "../styles/globals.scss";

import { setLanguage } from "../store/slices/languageSlice";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage) {
      dispatch(setLanguage(savedLanguage));
    }
  }, [dispatch]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
