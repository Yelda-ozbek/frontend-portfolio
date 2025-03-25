import React from "react";
import { useLanguage } from "../context/LanguageContext";
import content from "../data/content.json";
import profileImg from "../assets/profile.jpg";

const Profile = () => {
  const { lang } = useLanguage();
  const { basicInfo, about } = content[lang].profile;

  return (
    <section className="bg-primary dark:bg-darkBg text-white dark:text-limeText transition-colors duration-300 py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-10 text-white dark:text-limeText">
        {lang === "tr" ? "Profil" : "Profile"}
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1 space-y-2">
          {basicInfo.map((item, index) => (
            <p key={index} className="text-white dark:text-limeText">
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-4 items-center">
          <img
            src={profileImg}
            alt="about"
            className="rounded-2xl w-52 md:w-60 mx-auto shadow-lg"
          />
          <p className="text-sm md:text-base text-white dark:text-limeText text-center md:text-left">
            {about}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
