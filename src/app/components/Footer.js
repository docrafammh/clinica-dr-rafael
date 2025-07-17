import styles from '../page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}>RIGATTI</div>
          <div className={styles.footerTagline}>DESPERTE SUA FORÇA REAL</div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerPhone}>(47) 3170-4177</div>
          <div className={styles.footerAddress}>
            Rua 2950, 117 - Centro<br />
            Balneário Camboriú, SC
          </div>
        </div>
      </div>
    </footer>
  );
} 