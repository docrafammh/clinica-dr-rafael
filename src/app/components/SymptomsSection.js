'use client';
import styles from '../page.module.css';
import Image from 'next/image';

export default function SymptomsSection() {
  return (
    <section id='symptoms' className={styles.symptomsSection}>
      <div className={styles.symptomsContent}>
        <p className={styles.symptomsSubtext}>Se você sente essas</p>
        <h3 className={styles.symptomsSubtitle}>Dores...</h3>
        <div className={styles.symptomsGrid}>
          <div className={styles.symptom}><Image src="/cansaco-constante-icon-removebg.png" alt="Cansaço constante" width={60} height={60} /> Cansaço constante</div>
          <div className={styles.symptom}><Image src="/insonia-icon-removebg-preview.png" alt="Insônia" width={60} height={60} /> Ansiedade ou insônia</div>
          <div className={styles.symptom}><Image src="/inchaco-icon-removebg-preview.png" alt="Inchaço" width={60} height={60} /> Inchaço</div>
          <div className={styles.symptom}><Image src="/baixa-libido-icon-removebg-preview.png" alt="Baixa libido" width={60} height={60} /> Baixa libido</div>
          <div className={styles.symptom}><Image src="/compulsao-alimentar-icon-removebg-preview.png" alt="Ansiedade" width={60} height={60} /> Compulsão alimentar</div>
          <div className={styles.symptom}><Image src="/dificuldade-emagrecer-icon-removebg-preview.png" alt="Dificuldade para emagrecer" width={60} height={60} /> Dificuldade para emagrecer</div>
        </div>
      </div>
      <div className={styles.symptomsFeatures}>
        <div className={styles.symptomsFeaturesHeading}>
          <span className={styles.symptomsFeaturesSmall}>
            ... SEU CORPO ESTÁ PEDINDO SOCORRO ...
          </span>
          <h2 className={styles.symptomsFeaturesTitle}>
            Você <b>NÃO</b> está saudável. É o seu corpo tentando falar com você.<br></br>
            E aqui, nós te escutamos.
          </h2>
        </div>
        <div className={styles.symptomsFeatureBlocks}>
          <div className={styles.symptomsFeatureBlock}>
            <img
              src="/process1.png"
              alt="Mulher sorrindo"
              className={styles.symptomsFeatureImg}
            />
            <div className={styles.symptomsFeatureTextGroup}>
              <p className={styles.symptomsFeatureTextGold}>
                Se você sente cançada, mesmo quando acabou de acordar?
              </p>
              <p className={styles.symptomsFeatureText}>
                Esse não é o seu normal, e dá pra virar essa chave com um método que respeita o seu tempo.
              </p>
              <button onClick={() => window.open('https://form.spotform.com.br/cmdgfvwbw2jvgo6010b9eohg3', '_blank')} className={styles.symptomsFeatureButton}>
                <b>Fazer minha análise gratuita agora</b>
              </button>
            </div>
          </div>
          <div className={styles.symptomsFeatureBlock}>
            <img
              src="/process2.png"
              alt="Mulher olhando para o lado"
              className={styles.symptomsFeatureImg}
            />
            <div className={styles.symptomsFeatureTextGroup}>
              <p className={styles.symptomsFeatureTextGold}>
                Cansada de se sentir exausta todos os dias? por dentro e por fora?
              </p>
              <p className={styles.symptomsFeatureText}>
                Pode ser que o seu corpo esteja pedindo por algo mais profundo do que uma simples dieta.
              </p>
              <button onClick={() => window.open('https://form.spotform.com.br/cmdgfvwbw2jvgo6010b9eohg3', '_blank')} className={styles.symptomsFeatureButton}>
                <b>Fazer minha análise gratuita agora</b>
              </button>
            </div>
          </div>
          <div className={styles.symptomsFeatureBlock}>
            <img
              src="/process3.png"
              alt="Mulher se olhando no espelho"
              className={styles.symptomsFeatureImg}
            />
            <div className={styles.symptomsFeatureTextGroup}>
              <p className={styles.symptomsFeatureTextGold}>
                Tem dias em que a exaustão vem até quando a gente não fez nada?
              </p>
              <p className={styles.symptomsFeatureText}>
                Seu corpo está pedindo socorro. E sim, existe um caminho mais leve para viver com energa.
              </p>
              <button onClick={() => window.open('https://form.spotform.com.br/cmdgfvwbw2jvgo6010b9eohg3', '_blank')} className={styles.symptomsFeatureButton}>
                <b>Fazer minha análise gratuita agora</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 