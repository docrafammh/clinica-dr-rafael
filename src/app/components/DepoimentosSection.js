'use client';
import { useState } from 'react';
import styles from '../page.module.css';

const videos = [
  {
    title: 'Bruna',
    url: 'https://www.youtube.com/embed/ysz5S6PUM-U',
  },
  {
    title: 'Daniele',
    url: 'https://www.youtube.com/embed/jNQXAC9IVRw',
  },
  {
    title: 'Alexsandro',
    url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
  },
  {
    title: 'André',
    url: 'https://www.youtube.com/embed/ScMzIvxBSi4',
  },
  {
    title: 'Paula',
    url: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
  },
];

export default function DepoimentosSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  const next = () => setCurrent((prev) => (prev + 1) % videos.length);

  // Get 3 videos: center, left, right
  const getIndices = () => {
    const left = (current - 1 + videos.length) % videos.length;
    const right = (current + 1) % videos.length;
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
              <iframe
                width="320"
                height="480"
                src={videos[idx].url}
                title={videos[idx].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        <button className={styles.depoimentosArrow} onClick={next} aria-label="Próximo">&#62;</button>
      </div>
      <div className={styles.depoimentosLabel}>{videos[centerIdx].title}</div>
      <div className={styles.depoimentosDots}>
        {videos.map((_, idx) => (
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