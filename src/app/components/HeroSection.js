'use client';
import styles from '../page.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroBgSection}>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <span className={styles.mainHeadingGold} style={{textAlign: 'left'}}>Emagreça</span>
          <h1 className={styles.mainHeading} style={{textAlign: 'left'}}>Recupere sua energia e seu metabolismo.</h1>
          <h2 className={styles.smallHeading} style={{textAlign: 'left'}}>
            Seu corpo pode voltar a funcionar como antes.<br />
            com ciência e presença real.<br />
          </h2>
          <p className={styles.paragraph} style={{textAlign: 'left'}}>
            Diagnóstico com nosso time. Plano exclusivo para seu caso, sem fórmulas prontas.
          </p>
          <span className={styles.mainHeading}>Sua próxima fase começa agora</span>
          <button onClick={() => window.open('https://form.spotform.com.br/cmdgfvwbw2jvgo6010b9eohg3', '_blank')} className={styles.ctaButton} style={{alignSelf: 'flex-start'}}>
            <span className={styles.ctaBold}>Fazer minha análise agora</span>
          </button>
        </div>
        <div className={styles.rightContent}>

        </div>
      </div>
    </section>
  );
} 