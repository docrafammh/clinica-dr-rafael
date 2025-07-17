import styles from '../page.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutImageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=500&h=600&q=80"
          alt="Dr. Luiz Henrique Rigatti"
          className={styles.aboutImage}
        />
      </div>
      <div className={styles.aboutTextWrapper}>
        <blockquote className={styles.aboutQuote}>
          “Eu sei o que é sentir que o corpo não responde mais.<br />
          Já vi mulheres incríveis, inteligentes, fortes... se afogando em cansaço, peso emocional e um espelho que não as representa mais.<br />
          Aqui na RIGATTI®, a gente não receita fórmulas mágicas.<br />
          A gente te escuta. A gente cuida da sua bioquímica, da sua energia, da sua verdade.<br />
          Se você sente que é hora de voltar a ser você, eu te convido a dar esse primeiro passo.”
        </blockquote>
        <div className={styles.aboutName}>
          Dr. Luiz<br />Henrique Rigatti
        </div>
      </div>
    </section>
  );
} 