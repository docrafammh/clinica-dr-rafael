import styles from '../page.module.css';

export default function ProcessSection() {
  return (
    <section className={styles.processSection}>
      <div className={styles.processContent}>
        <h2 className={styles.processTitle}>
          NOSSO PROCESSO É SAGRADO,<br />CIENTÍFICO E HUMANO.
        </h2>
        <div className={styles.processSteps}>
          <div><span className={styles.processStepGold}>Escuta:</span> sua história é analisada por nosso time médico.</div>
          <div><span className={styles.processStepGold}>Leitura bioquímica:</span> entendemos o que seu corpo vem gritando.</div>
          <div><span className={styles.processStepGold}>Protocolo exclusivo:</span> você recebe um plano sob medida.</div>
        </div>
        <h3 className={styles.processSubtitle}>O QUE FAZEMOS AQUI NÃO É COMUM.</h3>
        <div className={styles.processGrid}>
          <div className={styles.processGridRight}>
            <div className={styles.processFeature}>
              <span className={styles.processIcon}>🧑‍⚕️</span>
              <span className={styles.processFeatureText}>PERSONALIZADO</span>
            </div>
            <div className={styles.processFeature}>
              <span className={styles.processIcon}>🎯</span>
              <span className={styles.processFeatureText}>PRECISO</span>
            </div>
            <div className={styles.processFeature}>
              <span className={styles.processIcon}>💻</span>
              <span className={styles.processFeatureText}>TECNOLÓGICO</span>
            </div>
          </div>
          <div className={styles.processGridLeft}>
            <div className={styles.processFeature}>
              <span className={styles.processIcon}>🤖</span>
              <span className={styles.processFeatureText}>ANALISADO POR IA</span>
            </div>
            <div className={styles.processFeature}>
              <span className={styles.processIcon}>👨‍⚕️</span>
              <span className={styles.processFeatureText}>SUPERVISIONADO POR NOSSO<br />TIME MÉDICO ESPECIALIZADO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 