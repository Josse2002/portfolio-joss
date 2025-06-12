import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function EasterEggGame({ onClose }) {
  const { t } = useTranslation();
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <p className="mb-4 text-lg">
          {score >= 10 ? t('game.youWin') : t('game.score', { score })}
        </p>
        {score < 10 && (
          <button
            className="bg-green-bg text-white px-4 py-2 rounded"
            onClick={handleClick}
          >
            {t('game.clickMe')}
          </button>
        )}
        <button className="ml-4 underline text-sm" onClick={onClose}>
          {t('game.close')}
        </button>
      </div>
    </div>
  );
}
