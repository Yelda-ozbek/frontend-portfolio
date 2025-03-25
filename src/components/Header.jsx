import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { lang, toggleLang } = useLanguage();
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="bg-violet-800 text-white px-6 md:px-20 py-4 flex justify-between items-center">
     
      <h1 className="text-xl font-bold">Yelda</h1>
      
      <div className="flex gap-4 items-center">
        
        <button
          onClick={toggleLang}
          className="bg-white text-violet-800 px-3 py-1 rounded hover:bg-gray-200 transition"
        >
          {lang === "tr" ? "EN" : "TR"}
        </button>


        <button
  onClick={toggleTheme}
  className="bg-limeBg text-darkBg px-4 py-1 rounded-full font-semibold shadow hover:brightness-95 transition"
>

</button>

      </div>
    </header>
  );
};

export default Header;

