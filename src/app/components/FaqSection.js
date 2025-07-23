'use client';
import styles from '../page.module.css';

export default function FaqSection() {
  return (
    <section id="faq" className={styles.faqIntroSection}>
      <div className={styles.faqIntroContent}>
        <h2 className={styles.faqIntroTitle}>
          Sua próxima versão começa<br />com escuta, ciência e alma.
        </h2>
        <button onClick={() => window.open('https://form.spotform.com.br/cmdgfvwbw2jvgo6010b9eohg3', '_blank')} className={styles.faqIntroButton}>
          <b>Fazer minha análise gratuita agora</b>
        </button>
        <h3 className={styles.faqIntroSubtitle}>Perguntas frequentes</h3>
      </div>
      <div className={styles.faqListWrapper}>
        <div className={styles.faqItem}>
          <details>
            <summary>É uma consulta médica?</summary>
            <p>
              Não. Essa é uma análise gratuita e inicial, feita pela nossa equipe para entender sua história e avaliar se você está apto(a) para iniciar o protocolo do Dr. Rafael.
            </p>
          </details>
        </div>
        <div className={styles.faqItem}>
          <details>
            <summary>O que é o Método M.U.D.A.R?</summary>
            <p>
              É um processo de transformação completo, que atua na mente, nas emoções, na rotina e no corpo — criado para quem não quer mais fórmulas prontas ou dietas genéricas.
            </p>
          </details>
        </div>
        <div className={styles.faqItem}>
          <details>
            <summary>Isso é só para quem quer emagrecer?</summary>
            <p>
              Não. O foco é saúde como um todo: energia, equilíbrio hormonal, autoestima, disposição e leveza mental.
            </p>
          </details>
        </div>
        <div className={styles.faqItem}>
          <details>
            <summary>Funciona mesmo para quem já tentou de tudo?</summary>
            <p>
              Sim. Muitos dos nossos pacientes chegaram desacreditados, mas encontraram no Método M.U.D.A.R uma abordagem real, que respeita o corpo e a mente.
            </p>
          </details>
        </div>
        <div className={styles.faqItem}>
          <details>
            <summary>O atendimento é online ou presencial?</summary>
            <p>
              Nossa triagem inicial é online. Após a análise, nossa equipe informa sobre o melhor formato para o seu acompanhamento.
            </p>
          </details>
        </div>
        <div className={styles.faqItem}>
          <details>
            <summary>Qual o perfil ideal para entrar no método?</summary>
            <p>
              Pessoas que estão dispostas a se comprometer de verdade com uma mudança — física, mental e emocional. Não serve para quem busca atalhos.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
} 