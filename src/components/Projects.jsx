import React from "react";
import { useLanguage } from "../context/LanguageContext";
import content from "../data/content.json";
import workintechImg from "../assets/workintech.jpg";
import horseClub from "../assets/horse.jpg"

const imageMap = {
  workintech: workintechImg,
  horseClub:horseClub,
};

const Projects = () => {
  const { lang } = useLanguage();
  const projects = content[lang].projects;

  return (
    <section className="bg-lime-200 py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-violet-800 mb-10">
        {lang === "tr" ? "Projeler" : "Projects"}
      </h2>

      <div className="flex flex-col gap-10">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6"
          >
             

            <img
              src={imageMap[proj.image]}
              alt={proj.title}
              className="w-full md:w-1/3 rounded-xl object-cover max-h-60"
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-violet-700 mb-2">{proj.title}</h3>
                <p className="text-gray-700 mb-4">{proj.desc}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {proj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-violet-100 text-violet-700 px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a href={proj.live} target="_blank" rel="noreferrer">
                  <button className="bg-violet-700 text-white px-4 py-2 rounded hover:opacity-90 transition">
                    {lang === "tr" ? "Siteyi Gör" : "View Site"}
                  </button>
                </a>
                <a href={proj.github} target="_blank" rel="noreferrer">
                  <button className="bg-gray-800 text-white px-4 py-2 rounded hover:opacity-90 transition">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
