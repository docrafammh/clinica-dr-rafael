'use client';
import styles from '../page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        <h2>Sua próxima fase começa agora</h2>
        <button onClick={() => window.open('https://form.spotform.com.br/cmdgfvwbw2jvgo6010b9eohg3', '_blank')} className={styles.ctaButton}><span className={styles.ctaBold}>Quero fazer minha análise gratuita</span></button>
        {/* <form>
          <input type="text" placeholder="Nome" required/>
          <input type="tel" placeholder="WhatsApp" required/>
          <input type="text" placeholder="Cidade" required/>
          <input type="text" placeholder="Profissão" />
          <input type="text" placeholder="Objetivo principal" />
          <input type="number" placeholder="Quanto está disposto a investir?" />
          <button type="submit" className={styles.ctaButton}><span className={styles.ctaBold}>Finalizar e ir para o WhatsApp</span></button>
        </form> */}
      </div>
    </footer>
  );
} 