import styles from '../page.module.css';

export default function ProcessSection() {
  return (
    <section className={styles.metodoSection}>
      <div className={styles.metodoContent}>
        <h2 className={styles.metodoTitle}>
          E com o nosso <span className={styles.metodoHighlight}>método</span>, se torna mais fácil:
        </h2>
        <p className={styles.metodoText}>
          O Método <span className={styles.metodoGold}>M.U.D.A.R</span> foi criado para pessoas que não querem mais fórmulas prontas.<br/>
          Pessoas que já entenderam que só emagrecer não resolve, se dentro ainda está tudo pesado.<br/>
          Esse método é um convite para uma <span className={styles.metodoGold}>transformação real</span>, física, mental e emocional.<br/>
          Cada letra representa um pilar da jornada que vai muito além da balança:
        </p>
        <div className={styles.metodoLista}>
          <div><span className={styles.metodoGold}>M <b>-</b> Mente:</span> Porque a primeira mudança precisa acontecer interiormente;</div>
          <div><span className={styles.metodoGold}>U <b>-</b> União:</span> Entre corpo, mente, rotina, autocuidado e propósito;</div>
          <div><span className={styles.metodoGold}>D <b>-</b> Disciplina:</span> Construída sem culpa, na constância que liberta;</div>
          <div><span className={styles.metodoGold}>A <b>-</b> Ação:</span> sem movimento, nada muda. Mesmo com conhecimento;</div>
          <div><span className={styles.metodoGold}>R <b>-</b> Renascimento:</span> Da sua energia, da sua rotina, da sua autoestima e da sua verdade.</div>
        </div>
        <div className={styles.metodoDestaque}>
          Não é um protocolo genérico.<br/>
          É um processo que respeita sua história, suas dores e seu tempo.
        </div>
        <p className={styles.metodoText}>
          Se algo em você sente que é hora de mudar de verdade, clique abaixo e agende sua conversa, onde vamos te ouvir com profundidade, entender seus bloqueios e te mostrar se o Método <span className={styles.metodoGold}>M.U.D.A.R</span> faz sentido para você.
        </p>
        <button className={styles.metodoButton}>Começar minha análise</button>
      </div>
    </section>
  );
} 