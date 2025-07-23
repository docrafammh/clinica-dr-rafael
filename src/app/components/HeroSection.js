import styles from '../page.module.css';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className={styles.mainContent}>
      <section id="hero" className={styles.leftContent}>
        <span className={styles.mainHeadingGold}>Emagreça</span>
        <h1 className={styles.mainHeading}>Recupere sua energia e seu metabolismo.</h1>
        <h2 className={styles.smallHeading}>
          Seu corpo pode voltar a funcionar como antes.<br />
          com ciência e presença real.<br />
        </h2>
        <p className={styles.paragraph}>
          Diagnóstico gratuito com nosso time. Plano exclusivo para seu caso, sem fórmulas prontas.
        </p>
        <button className={styles.ctaButton}>
          <span className={styles.ctaBold}>Fazer minha análise gratuita agora</span>
        </button>
      </section>
      <section className={styles.rightContent}>
        <Image
          src="/dr-rafael-hero.png"
          alt="Imagem do Doutor Rafael"
          width={400}
          height={400}
          className={styles.heroImage}
          priority
        />
      </section>
    </main>
  );
} 