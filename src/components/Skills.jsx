import React from "react";
import { useLanguage } from "../context/LanguageContext";
import content from "../data/content.json";

import jsIcon from "../assets/skills/js.png";
import reactIcon from "../assets/skills/react.png";
import reduxIcon from "../assets/skills/redux.png";
import nodeIcon from "../assets/skills/node.png";
import vscodeIcon from "../assets/skills/vscode.png";
import figmaIcon from "../assets/skills/figma.png";

const iconMap = {
    javascript: jsIcon,
    react: reactIcon,
    redux: reduxIcon,
    node: nodeIcon,
    vscode: vscodeIcon,
    figma: figmaIcon
  };
  
const Skills = () => {
  const { lang } = useLanguage();
  const skills = content[lang].skills;

  return (
    <section className="bg-white dark:bg-darkBg text-violet-800 dark:text-white transition">

      <h2 className="text-3xl font-bold mb-10">{lang === "tr" ? "Yetenekler" : "Skills"}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center gap-4">
            <img
  src={iconMap[skill.toLowerCase().replace(/\s+/g, "")]}
  alt={skill}
  className="w-12 h-12"
/>

            <span className="text-lg font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
