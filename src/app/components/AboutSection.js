import styles from '../page.module.css';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div style={{backgroundColor: "#fff", paddingTop: "64px", paddingBottom: "64px"}}>
      <h2 className={styles.aboutTitle}>Quem é o Dr. Rafael Hirsch</h2>
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutImageWrapper}>
          <Image
            src="/bio-foto.png"
            alt="Dr. Luiz Henrique Rigatti"
            className={styles.aboutImage}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.aboutTextWrapper}>
          <blockquote className={styles.aboutQuote}>
            Dr. Rafael Hirsch é médico com atuação focada em saúde preventiva, nutrologia e performance metabólica. Formado pela ULBRA e com especialização em Nutrologia Funcional e Terapia Nutricional, construiu sua carreira com um propósito claro: transformar a saúde de forma definitiva, sem promessas rápidas — com ciência, escuta e estratégia.<br/>
            Com uma abordagem individualizada, ele atende pessoas que buscam mais energia, emagrecimento saudável e equilíbrio hormonal — sem modismos, focando em resultados reais e sustentáveis.
          </blockquote>
          <div className={styles.aboutName}>
            Dr. Rafael Hirsch
          </div>
        </div>
      </section>
      <span style={{textAlign: "center"}} className={styles.symptomsFeaturesSmall}>“A nova medicina começa com escuta. Aqui, a gente traduz a ciência em transformação real.”</span>
    </div>
  );
} 