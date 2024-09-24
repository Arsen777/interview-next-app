"use client";

import { Provider } from "react-redux";

import "../i18n/config";
import store from "../store";

import "../styles/globals.scss";

import LanguageSwitcher from "../components/languageSwitcher";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <header>
            <h1>My Multilingual App</h1>
            <LanguageSwitcher />
          </header>
          <main>{children}</main>
        </body>
      </html>
    </Provider>
  );
}

export default RootLayout;
