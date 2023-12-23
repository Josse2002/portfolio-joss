import React from "react";
import { Tags } from "./Tags";
import { ButtonSecondary } from "../button/ButtonSecondary";
import "./Card.css"; // Import your custom CSS file for styling

// This code creates a card component that can be used to display a project in a portfolio.
// The card has an image, a title, some tags, and a short description, as well as buttons
// to view the project and the project code.

export function Card({title, liveCode, image, githubLink, description, techStack}) {
  return (
    <div className="card-container border text-card-foreground max-w-sm my-5 mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        {/** Image of the card */}
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-72"
            src={image}
            alt="projectImage"
          />
        </div>

        {/** Content of the card */}
        <div className="p-8 card-content">
          <div className="capitalize tracking-wide text-green-bg font-bold text-3xl">
            {title}
          </div>
          <div className="flex flex-row mt-2">
            {techStack.map((tech) => (
              <Tags key={tech.name} tooltipText={tech.name} icon={tech.icon} />
            ))}
          </div>

          <p className="mt-2 text-gray-500">
            {description}
          </p>

          <div className="flex flex-row mt-4 gap-2">
            <ButtonSecondary text={"View"} icon={"fa-solid fa-eye"} link={liveCode} />
            <ButtonSecondary text={"View Code"} icon={"fa-brands fa-github"} link={githubLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
