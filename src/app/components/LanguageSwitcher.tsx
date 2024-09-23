function LanguageSwitcher() {
  const changeLanguage = (lang: "en" | "ru") => {
    // TODO
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ru")}>Russian</button>
    </div>
  );
}

export default LanguageSwitcher;
