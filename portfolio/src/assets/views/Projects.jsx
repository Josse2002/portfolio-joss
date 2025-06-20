// Projects.js
import React from "react";
import { useTranslation } from 'react-i18next';
import { obtenerProyectos } from '../services/firebase.service';
import { useEffect, useState } from 'react';
import { Icono } from "../components/icons-transparency/Icons";
import { Card } from "../components/cards/Card";
import { EasterEggGame } from "../components/game/EasterEggGame";

const iconos = [
  { clase: "fa-solid fa-rocket", posicion: "top-10 right-28 lg:top-10 lg:-right-10" },
  { clase: "fa-solid fa-star", posicion: "top-44 right-10 lg:top-44 lg:-right-36 rotate-45" },
  { clase: "fa-solid fa-moon", posicion: "top-96 right-28 lg:top-96 lg:-right-20 rotate-0" },
  { clase: "fa-solid fa-calculator", posicion: "top-[40rem] left-28 lg:top-[29rem] lg:-left-16" },
  { clase: "fa-solid fa-gamepad", posicion: "top-[50rem] left-10 lg:top-[40rem] lg:-left-36" },
  { clase: "fa-solid fa-code", posicion: "top-[60rem] left-24 lg:top-[50rem] lg:-left-20" },
  { clase: "fa-solid fa-paw", posicion: "top-[60rem] right-28 lg:top-[60rem] lg:-right-10" },
  { clase: "fa-solid fa-bolt", posicion: "top-[70rem] right-10 lg:top-[70rem] lg:-right-36" },
  { clase: "fa-solid fa-terminal", posicion: "top-[80rem] right-28 lg:-right-20 rotate-0" },
];

export function Projects() {
  const [proyectos, setProyectos] = useState([]);
  const [showGame, setShowGame] = useState(false);
  const { t } = useTranslation();

  async function obtenerYMostrarProyectos() {
    try {
      const proyectosFetched = await obtenerProyectos();
      setProyectos(proyectosFetched);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    obtenerYMostrarProyectos();
  }, []);

  return (
    <>
      <h2 className="text-2xl uppercase tracking-widest text-center mt-16 font-semibold">
        {t('projects.title')}
      </h2>

      <div className="flex flex-col justify-center w-full relative">
        {proyectos.map((proyecto) => (
          <Card
            key={proyecto.title}
            title={proyecto.title}
            liveCode={proyecto.liveCode}
            image={proyecto.image}
            githubLink={proyecto.githubLink}
            description={t(proyecto.description)}
            techStack={proyecto.techStack}
            descriptionEnglish={t(proyecto.descriptionEnglish)}
            alt={{ projectName: proyecto.title }}
          />
        ))}

        {iconos.map((icono) => (
          <Icono
            key={icono.clase}
            clase={icono.clase}
            posicion={icono.posicion}
            onClick={icono.clase === 'fa-solid fa-gamepad' ? () => setShowGame(true) : undefined}
          />
        ))}

        {showGame && <EasterEggGame onClose={() => setShowGame(false)} />}
      </div>
    </>
  );
}
