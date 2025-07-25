'use client';
import styles from '../page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        <h2>Sua próxima fase começa agora</h2>
        <button onClick={() => window.open('https://form.spotform.com.br/cmdgfvwbw2jvgo6010b9eohg3', '_blank')} className={styles.ctaButton}><span className={styles.ctaBold}>Quero fazer minha análise</span></button>
      </div>
    </footer>
  );
} 