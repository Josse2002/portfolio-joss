import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function SocialMedia() {
  return (
    <div className="flex flex-row gap-4 mt-2 text-black-text">
      <a className="text-3xl hover:text-green-bg duration-300" href="https://github.com/Josse2002">
        <AiFillGithub />
      </a>
      <a className="text-3xl hover:text-green-bg duration-300" href="https://www.linkedin.com/in/jos%C3%A9-c-223797200/">
        <AiFillLinkedin />
      </a>
    </div>
  );
}
