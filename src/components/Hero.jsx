import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import content from "../data/content.json";
import profileImg from "../assets/profile2.jpg";

const Hero = () => {
  const { lang, toggleLang } = useLanguage();
  const { dark, toggleTheme } = useTheme();
  const { title, desc, github, linkedin } = content[lang].hero;

  return (
    <section className="relative bg-primary dark:bg-darkBg text-white dark:text-limeText transition-colors duration-300 min-h-[60vh] flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16">

      {/* Sol üst köşe - Yelda */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
        <h1 className="text-lg md:text-xl font-bold text-white dark:text-limeText">Yelda</h1>
      </div>

      {/* Sağ üst köşe - Dil ve Tema Butonları */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 flex gap-2">
        {/* Dil Butonu */}
        <button
          onClick={toggleLang}
          className="bg-white text-violet-800 px-3 py-1 rounded-full font-bold shadow hover:bg-gray-200 transition"
        >
          {lang === "tr" ? "ENGLISH" : "TÜRKÇE'YE GEÇ"}
        </button>

        {/* Tema Butonu */}
        <button
          onClick={toggleTheme}
          className="bg-lime-300 text-violet-900 px-4 py-1 rounded-full font-semibold shadow hover:brightness-95 transition"
        >
          {dark ? "Light Mode" : " Dark Mode"}
        </button>
      </div>

      {/* Sol içerik */}
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-limeText">
          {title}
        </h2>
        <p className="text-lg mb-6">{desc}</p>
        <div className="flex gap-4">
          <a href={github} target="_blank" rel="noreferrer">
            <button className="bg-white text-violet-700 px-4 py-2 rounded hover:bg-gray-200 transition">
              GitHub
            </button>
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <button className="bg-white text-violet-700 px-4 py-2 rounded hover:bg-gray-200 transition">
              LinkedIn
            </button>
          </a>
        </div>
      </div>

      {/* Sağ görsel */}
      <div className="flex-1 flex justify-center">
        <img
          src={profileImg}
          alt="profile"
          className="rounded-xl max-w-[300px] shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
