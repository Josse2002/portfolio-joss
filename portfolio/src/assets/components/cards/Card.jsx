// Card.js
import React, { useEffect, memo } from "react";
import { useTranslation } from 'react-i18next';
import { Tags } from "./Tags";
import AOS from 'aos';
import { ButtonSecondary } from "../button/ButtonSecondary";
import "./Card.css"; // Importa tu archivo de CSS personalizado para el estilo
import 'aos/dist/aos.css';


export const Card = memo(({ title, liveCode, image, githubLink, description, techStack, descriptionEnglish }) => {
  // ...
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  // Verifica el idioma actual
  const isSpanish = i18n.language === 'es';

  return (
    <article data-aos="fade-up" className="card-container border text-card-foreground max-w-sm my-5 mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        {/* Imagen de la tarjeta */}
        <div className="md:flex-shrink-0">
          <img
            className="w-full object-cover md:h-full md:w-72"
            src={image}
            width="100%"
            alt="projectImage"
            loading="lazy"
          />
        </div>

        {/* Contenido de la tarjeta */}
        <div className="p-8 card-content">
          <div className="capitalize tracking-wide text-green-bg font-bold text-3xl">
            {title}
          </div>
          <div className="flex flex-row mt-2">
            {techStack.map((tech) => (
              <Tags key={tech.name} tooltipText={tech.name} icon={tech.icon} />
            ))}
          </div>

          {/* Verifica el idioma y muestra la descripción correspondiente */}
          <p className="mt-2 text-gray-500">
            {isSpanish ? description : descriptionEnglish}
          </p>

          <div className="flex flex-row mt-4 gap-2">
            <ButtonSecondary text={t('card.view')} icon={"fa-solid fa-eye"} link={liveCode} ariaLabel="Boton para ver más" />
            <ButtonSecondary text={t('card.viewCode')} icon={"fa-brands fa-github"} link={githubLink} ariaLabel="Boton para ver el codigo" />
          </div>
        </div>
      </div>
    </article>
  );
});
