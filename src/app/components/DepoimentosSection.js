'use client';
import { useState } from 'react';
import styles from '../page.module.css';

const imagens = [
  '/dep1.jpeg',
  '/dep2.jpeg',
  '/dep3.jpeg',
  '/dep4.jpeg',
];

export default function DepoimentosSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev - 1 + imagens.length) % imagens.length);
  const next = () => setCurrent((prev) => (prev + 1) % imagens.length);

  // Get 3 imagens: center, left, right
  const getIndices = () => {
    const left = (current - 1 + imagens.length) % imagens.length;
    const right = (current + 1) % imagens.length;
    return [left, current, right];
  };
  const [leftIdx, centerIdx, rightIdx] = getIndices();

  return (
    <section id="results" className={styles.depoimentosSection}>
      <div className={styles.depoimentosTitleContainer}>
        <h2 className={styles.depoimentosTitle}>DEPOIMENTOS</h2>
      </div>
      <div className={styles.depoimentosSliderWrapper}>
        <button className={styles.depoimentosArrow} onClick={prev} aria-label="Anterior">&#60;</button>
        <div className={styles.depoimentosSlider}>
          {[leftIdx, centerIdx, rightIdx].map((idx, i) => (
            <div
              key={idx}
              className={
                i === 1
                  ? styles.depoimentosCard + ' ' + styles.depoimentosCardCenter
                  : styles.depoimentosCard
              }
            >
              <img
                src={imagens[idx]}
                alt={`Depoimento ${idx + 1}`}
                className={styles.depoimentoImgCard}
              />
            </div>
          ))}
        </div>
        <button className={styles.depoimentosArrow} onClick={next} aria-label="Próximo">&#62;</button>
      </div>
      <div className={styles.depoimentosDots}>
        {imagens.map((_, idx) => (
          <span
            key={idx}
            className={
              idx === centerIdx
                ? styles.depoimentosDot + ' ' + styles.depoimentosDotActive
                : styles.depoimentosDot
            }
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
} 