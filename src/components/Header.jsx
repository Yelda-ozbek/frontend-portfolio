import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { lang, toggleLang } = useLanguage();
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="bg-primary dark:bg-darkBg text-white dark:text-limeText transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Sol kısım: Logo */}
        <h1 className="text-xl font-bold text-white dark:text-limeText">Yelda</h1>

        {/* Sağ kısım: Butonlar */}
        <div className="flex gap-4 items-center">
          {/* Dil Butonu */}
          <button
            onClick={toggleLang}
            className="bg-white text-violet-800 px-3 py-1 rounded-full font-semibold shadow hover:bg-gray-200 transition"
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>

          {/* Tema Butonu */}
          <button
            onClick={toggleTheme}
            className="bg-limeBg text-darkBg px-4 py-1 rounded-full font-semibold shadow hover:brightness-95 transition"
          >
            {dark ? " Light Mode" : " Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
