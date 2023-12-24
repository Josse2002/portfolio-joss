// AboutMe.js
import React from "react";
import { useTranslation } from 'react-i18next';
import techStack from "../images/techStack/techStack";

const technologies = [
  { name: "React", image: techStack.react },
  { name: "Tailwind", image: techStack.tailwind },
  { name: "CSS", image: techStack.css },
  { name: "Express", image: techStack.express },
  { name: "Git", image: techStack.git },
  { name: "Firebase", image: techStack.firebase },
  { name: "JavaScript", image: techStack.javascript },
  { name: "Node.js", image: techStack.node },
  { name: "SQL", image: techStack.SQL },
  { name: "mysql", image: techStack.mysql },
  { name: "HTML", image: techStack.HTML },
  { name: "figma", image: techStack.figma },
];

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className="text-2xl uppercase tracking-widest text-center my-16 font-semibold">
        {t('aboutMeAndSkills')}
      </h2>
      <div className="flex flex-col px-16 lg:px-0 lg:flex-row gap-10 items-start">
        <div className="flex flex-col gap-4">
          <p>
            {t('introText1')} <span className="font-bold text-green-dark">{t('creativeSolutions')}</span> {t('introText2')}
          </p>
          <p>
            {t('introText3')} <span className="font-bold text-green-dark">{t('visualAppeal')}</span> {t('introText4')}
          </p>
          <p>
            {t('introText5')}
          </p>
        </div>
        <div className="grid grid-cols-6 gap-x-16 gap-y-5 lg:grid-cols-3 lg:gap-10 items-center">
          {technologies.map((tech, index) => (
            <React.Fragment key={index}>
              <img
                loading="lazy"
                style={{ width: '500px'}} // Establecer anchos y altos directamente
                src={tech.image}
                alt={tech.name}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
