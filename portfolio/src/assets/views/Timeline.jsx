// Timeline.js
import React from "react";
import { useTranslation } from 'react-i18next';
import { ItemTimeline } from "../components/item-timeline/ItemTimeline";

export function Timeline() {
  const { t } = useTranslation();

  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="text-2xl uppercase tracking-widest text-center my-16 font-semibold">
        {t('timeline.title')}
      </h2>
      <ol className="relative border-s border-black w-4/5 lg:w-full">
        {t('timeline.items', { returnObjects: true }).map((item, index) => (
          <ItemTimeline key={index} {...item} />
        ))}
      </ol>
    </div>
  );
}
