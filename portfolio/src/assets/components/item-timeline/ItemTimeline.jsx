// ItemTimeline.js
import React from "react";

export function ItemTimeline({ title, description }) {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-green-black rounded-full -start-3 ring-8 ring-green-dark">
        <i className="fa-solid fa-book text-green-200"></i>
      </span>
      <h3 className="flex items-center mb-1 text-lg text-green-dark font-bold">
        {title}
      </h3>
      <p className="mb-4 text-base font-normal text-zinc-900">
        {description}
      </p>
    </li>
  );
}
