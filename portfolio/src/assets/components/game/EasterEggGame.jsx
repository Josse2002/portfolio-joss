import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function EasterEggGame({ onClose }) {
  const { t } = useTranslation();
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const player = { x: width / 2 - 15, y: height - 20, w: 30, h: 10 };
    let bullets = [];
    let enemies = [];

    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 5; c++) {
        enemies.push({ x: 30 + c * 50, y: 30 + r * 30, w: 30, h: 15 });
      }
    }

    const handleKey = (e) => {
      if (gameOver) return;
      if (e.key === 'ArrowLeft') {
        player.x = Math.max(0, player.x - 10);
      } else if (e.key === 'ArrowRight') {
        player.x = Math.min(width - player.w, player.x + 10);
      } else if (e.key === ' ') {
        bullets.push({ x: player.x + player.w / 2 - 2, y: player.y - 10, w: 4, h: 10 });
      }
    };

    window.addEventListener('keydown', handleKey);

    let frameId;
    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // draw player
      ctx.fillStyle = '#10b981';
      ctx.fillRect(player.x, player.y, player.w, player.h);

      // update and draw bullets
      ctx.fillStyle = '#ef4444';
      bullets.forEach((b) => (b.y -= 5));
      bullets = bullets.filter((b) => b.y + b.h > 0);
      bullets.forEach((b) => ctx.fillRect(b.x, b.y, b.w, b.h));

      // draw enemies
      ctx.fillStyle = '#3b82f6';
      enemies.forEach((en) => ctx.fillRect(en.x, en.y, en.w, en.h));

      // collisions
      bullets.forEach((b) => {
        enemies.forEach((en, idx) => {
          if (
            b.x < en.x + en.w &&
            b.x + b.w > en.x &&
            b.y < en.y + en.h &&
            b.y + b.h > en.y
          ) {
            enemies.splice(idx, 1);
            b.hit = true;
          }
        });
      });
      bullets = bullets.filter((b) => !b.hit);

      if (enemies.length === 0) {
        setGameOver(true);
        return;
      }

      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('keydown', handleKey);
      cancelAnimationFrame(frameId);
    };
  }, [gameOver]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white p-4 rounded shadow-lg text-center">
        {gameOver ? (
          <div>
            <p className="mb-2">{t('game.youWin')}</p>
            <button className="underline text-sm" onClick={onClose}>{t('game.close')}</button>
          </div>
        ) : (
          <div>
            <canvas ref={canvasRef} width="300" height="400" className="border mb-2" />
            <p className="text-xs mb-2">{t('game.instructions')}</p>
            <button className="underline text-sm" onClick={onClose}>{t('game.close')}</button>
          </div>
        )}
      </div>
    </div>
  );
}