import styles from '../page.module.css';

export default function SymptomsSection() {
  return (
    <section id='symptoms' className={styles.symptomsSection}>
      <div className={styles.symptomsContent}>
        <h2 className={styles.symptomsTitle}>
          Agora, precisamos escutar além das palavras.
        </h2>
        <p className={styles.symptomsText}>
          Antes de qualquer tratamento, precisamos sentir sua jornada.<br />
          Cada passo seu carrega histórias, dores, desejos.<br />
          <br />
          Este é um momento de escuta. De conexão. De clareza.
        </p>
        <div className={styles.symptomsDividerRow}>
          <span className={styles.symptomsDivider} />
          <h4 className={styles.symptomsh4}>Prosseguir para minha análise</h4>
          <span className={styles.symptomsDivider} />
        </div>
        <h3 className={styles.symptomsSubtitle}>VOCÊ NÃO ESTÁ AQUI POR ACASO.</h3>
        <p className={styles.symptomsSubtext}>Se você sente:</p>
        <div className={styles.symptomsGrid}>
          <div className={styles.symptom}><span className={styles.symptomIcon}>💤</span> Cansaço constante</div>
          <div className={styles.symptom}><span className={styles.symptomIcon}>😴</span> Insônia</div>
          <div className={styles.symptom}><span className={styles.symptomIcon}>🧑‍🦱</span> Inchaço</div>
          <div className={styles.symptom}><span className={styles.symptomIcon}>💔</span> Perda de libido</div>
          <div className={styles.symptom}><span className={styles.symptomIcon}>🍽️</span> Ansiedade ou compulsão alimentar</div>
          <div className={styles.symptom}><span className={styles.symptomIcon}>📉</span> Dificuldade para emagrecer</div>
          <div className={styles.symptom}><span className={styles.symptomIcon}>🧑‍🦲</span> Queda de cabelo</div>
          <div className={styles.symptom}><span className={styles.symptomIcon}>🐢</span> Metabolismo lento</div>
        </div>
      </div>
      <div className={styles.symptomsFeatures}>
        <div className={styles.symptomsFeaturesHeading}>
          <span className={styles.symptomsFeaturesSmall}>
            ... SEU CORPO ESTÁ PEDINDO SOCORRO ...
          </span>
          <h2 className={styles.symptomsFeaturesTitle}>
            Isso NÃO é normal. <span className={styles.symptomsFeaturesNormal}>É sua bioquímica tentando falar com você. Aqui, nós escutamos.</span>
          </h2>
        </div>
        <div className={styles.symptomsFeatureBlocks}>
          <div className={styles.symptomsFeatureBlock}>
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=500&h=300&q=80"
              alt="Mulher sorrindo"
              className={styles.symptomsFeatureImg}
            />
            <div className={styles.symptomsFeatureTextGroup}>
              <p className={styles.symptomsFeatureText}>
                Se você sente que está exausta, emocionalmente ou fisicamente:
              </p>
              <button className={styles.symptomsFeatureButton}>
                <b>Quero reencontrar minha autoestima.</b>
              </button>
            </div>
          </div>
          <div className={styles.symptomsFeatureBlock}>
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=500&h=300&q=80"
              alt="Mulher trabalhando"
              className={styles.symptomsFeatureImg}
            />
            <div className={styles.symptomsFeatureTextGroup}>
              <p className={styles.symptomsFeatureText}>
                Se você busca performance e clareza mental:
              </p>
              <button className={styles.symptomsFeatureButton}>
                <b>Quero transformar meu metabolismo</b>
              </button>
            </div>
          </div>
          <div className={styles.symptomsFeatureBlock}>
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=500&h=300&q=80"
              alt="Mulher sorrindo"
              className={styles.symptomsFeatureImg}
            />
            <div className={styles.symptomsFeatureTextGroup}>
              <p className={styles.symptomsFeatureText}>
                Se você sente que se perdeu de si mesma:
              </p>
              <button className={styles.symptomsFeatureButton}>
                <b>Quero voltar a me reconhecer</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 