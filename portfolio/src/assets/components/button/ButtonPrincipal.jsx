import React from "react";

export function ButtonPrincipal({ text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-green-dark font-semibold border-4 border-green-dark rounded-full hover:text-white hover:bg-green-dark hover:scale-105 transition-all inline-block"
    >
      {text}
    </a>
  );
}
