import React from "react";
import { useTranslation } from 'react-i18next';
import { ButtonPrincipal } from "../components/button/ButtonPrincipal";

export function GetTouch() {
  const { t } = useTranslation();

  return (
    <>
      <div className="my-10">
        <h2 className="text-5xl text-center font-bold text-green-bg">
          {t('getInTouch.title')}
        </h2>
        <p className="px-20 py-2 text-center">
          {t('getInTouch.content')}
        </p>
        <div className="flex justify-center items-center mt-2">
          <ButtonPrincipal text={t('getInTouch.buttonText')} link="mailto:jcastillo10b@gmail.com" />
        </div>
      </div>
      <h3 className="text-center text-green-dark">
        {t('getInTouch.designedAndBuilt')} {t('getInTouch.by')}{' '}
        <span className="font-bold">{t('getInTouch.yourName')}</span>
      </h3>
    </>
  );
}
