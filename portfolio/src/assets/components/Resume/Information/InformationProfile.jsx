import React from "react";
import { SocialMedia } from "./socialMedia/SocialMedia";
import { useTranslation } from 'react-i18next';

export function InformationProfile() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center lg:items-start mt-10">
      <h2 className="text-4xl font-bold text-green-dark">{t('informationProfile.name')}</h2>
      <p className="tracking-widest text-gray-700">
        {t('informationProfile.role.frontendDeveloper')}{" "}
        <span dangerouslySetInnerHTML={{ __html: t('informationProfile.role.uiUxDesigner') }} />
      </p>
      <SocialMedia />
      <p className="mt-3 w-1/2 text-center my-5 lg:my-0 lg:w-full" dangerouslySetInnerHTML={{ __html: t('informationProfile.description') }} />
    </div>
  );
}
