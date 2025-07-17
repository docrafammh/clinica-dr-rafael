import styles from '../page.module.css';

export default function FaqSection() {
  return (
    <section id="faq" className={styles.faqIntroSection}>
      <div className={styles.faqIntroContent}>
        <h2 className={styles.faqIntroTitle}>
          Sua próxima versão começa<br />com escuta, ciência e alma.
        </h2>
        <button className={styles.faqIntroButton}>
          <b>Quero fazer minha análise vibracional</b>
        </button>
        <h3 className={styles.faqIntroSubtitle}>Perguntas frequentes</h3>
      </div>
      <div className={styles.faqListWrapper}>
        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>É uma consulta?</div>
          <div className={styles.faqAnswer}>
            Não. Este é um diagnóstico preliminar gratuito, onde nossa equipe entende seu caso e avalia se você está apto para nosso protocolo.
          </div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>Qual o valor?</div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>Funciona para qualquer pessoa?</div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>Quais os riscos do tratamento com Tirzepatida?</div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>Quais as contraindicações do Tirzepatida?</div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>Para quem é indicado o tratamento?</div>
        </div>
      </div>
    </section>
  );
} 