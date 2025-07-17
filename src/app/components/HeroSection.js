import styles from '../page.module.css';
// import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className={styles.mainContent}>
      <section id="hero" className={styles.leftContent}>
        <h2 className={styles.smallHeading}>Sua transformação não começa aqui.</h2>
        <h1 className={styles.mainHeading}>
          Ela já começou no<br />
          momento em que<br />
          você clicou.
        </h1>
        <p className={styles.paragraph}>
          Se você chegou até aqui, é porque algo dentro de você já decidiu mudar.<br /><br />
          E nós estamos prontos para te escutar, de verdade.
        </p>
        <button className={styles.ctaButton}>
          <span className={styles.ctaBold}>Quero fazer minha</span><br />
          <span className={styles.ctaNormal}>análise vibracional</span>
        </button>
      </section>
      <section className={styles.rightContent}>
        {/* <Image
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=500&h=500&q=80"
          alt="Mulher sorrindo"
          width={400}
          height={400}
          className={styles.heroImage}
          priority
        /> */}
      </section>
    </main>
  );
} 