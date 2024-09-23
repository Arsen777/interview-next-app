"use client";

import LanguageSwitcher from "./components/languageSwitcher";

import "../styles/globals.scss";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Multilingual App</h1>
          <LanguageSwitcher />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
