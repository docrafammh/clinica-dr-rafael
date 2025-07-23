'use client';
import { useState } from 'react';
import styles from '../page.module.css';

const depoimentos = [
  {
    nome: 'Anônimo',
    texto: 'Vocês são sensacionais, estão me ajudando a mudar a minha vida, minha história, agradeço a Deus todos os dias por ter colocado vocês em meu caminho. E muito mais que ouvir você ajuda a dar um norte, a ajudar a voltar pros trilhos e ter uma qualidade de vida muito melhor. Já se foram 20kg em 90 dias. Só tenho a agradecer a você e todos da clínica. Que Deus abençoe a vida de vocês!'
  },
  {
    nome: 'Sandra Cristina',
    texto: 'O Dr. Rafael e sua equipe trazem muita segurança e resultados muito além das expectativas, pois investigam, com perspectiva integralista, com total comprometimento à saúde do indivíduo. Sendo assim, trata o corpo e mente como uma unidade. Observa todas as partes pra otimizar o funcionamento do todo. Indico sempre a clínica pois é um aprendizado de si mesmo pra toda vida.'
  },
  {
    nome: 'Karis Regina Brunetto Cozer',
    texto: 'Atendimento incrível! E após apenas um mês de tratamento (personalizado para mim) eu já começo ver resultados. Indico para todo mundo!'
  },
  {
    nome: 'mariana frigeri',
    texto: 'Amo esse lugar! Profissionalismo, atendimento individualizado, personalizado e que supera qualquer expectativa.'
  },
];

export default function DepoimentosSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  const next = () => setCurrent((prev) => (prev + 1) % depoimentos.length);

  // Get 3 depoimentos: center, left, right
  const getIndices = () => {
    const left = (current - 1 + depoimentos.length) % depoimentos.length;
    const right = (current + 1) % depoimentos.length;
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
              <div className={styles.depoimentoTexto}>
                <p>"{depoimentos[idx].texto}"</p>
                <span className={styles.depoimentoNome}>- {depoimentos[idx].nome}</span>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.depoimentosArrow} onClick={next} aria-label="Próximo">&#62;</button>
      </div>
      <div className={styles.depoimentosDots}>
        {depoimentos.map((_, idx) => (
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