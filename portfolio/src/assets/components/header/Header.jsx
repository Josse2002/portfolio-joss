// Header.js
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

export function Header() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <>
      <div>
        <div className="flex flex-row justify-end m-10 gap-3">
          <button
            className={`text-xl ${currentLanguage === 'es' ? 'font-bold' : ''}`}
            onClick={() => changeLanguage('es')}
          >
            {i18n.t('language.es')}
          </button>
          /
          <button
            className={`text-xl ${currentLanguage === 'en' ? 'font-bold' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            {i18n.t('language.en')}
          </button>
        </div>
      </div>
    </>
  );
}
