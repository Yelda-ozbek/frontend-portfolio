import React from "react";
import { useLanguage } from "../context/LanguageContext";
import content from "../data/content.json";
import twitterIcon from "../assets/icons/twitter.png";
import codepenIcon from "../assets/icons/codepen.png";
import mailIcon from "../assets/icons/mail.png";
import instagramIcon from "../assets/icons/instagram.png";


const Footer = () => {
  const { lang } = useLanguage();
  const t = content[lang].contact;

  return (
    <footer className="bg-white dark:bg-darkBg text-center py-16 px-6 text-violet-700 dark:text-white">
       Yeldayazilim@icloud.com
    <div className="flex justify-center gap-6 mt-6">
  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
  </a>
  <a href="https://codepen.io" target="_blank" rel="noreferrer">
    <img src={codepenIcon} alt="Codepen" className="w-6 h-6" />
  </a>
  <a href="mailto:yeldayazilim@icloud.com">
    <img src={mailIcon} alt="Mail" className="w-6 h-6" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
  </a>
</div>

    </footer>
  );
};

export default Footer;
