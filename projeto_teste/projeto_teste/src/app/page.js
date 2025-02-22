import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Seja bem-vindo à Clínica Belchior</h1>
      <p className={styles.description}>
        Na Clínica Belchior, sua saúde e bem-estar são a nossa prioridade. Oferecemos um atendimento humanizado, acolhedor e de alta qualidade, garantindo que você se sinta confortável e cuidado em todas as etapas da sua jornada de saúde.
      </p>
      <p className={styles.description}>
        Nossa equipe de profissionais altamente qualificados está pronta para oferecer os melhores tratamentos e orientações personalizadas para você e sua família. Se você busca atenção especializada, confiança e cuidado de excelência, você está no lugar certo!
      </p>
      <div style={{width: "100%", overflowX: "auto"}}>
      <div className={styles.image}>
        <img src="/medico_img.png" alt="imagem" />
      </div>
      </div>
    </div>
  );
}