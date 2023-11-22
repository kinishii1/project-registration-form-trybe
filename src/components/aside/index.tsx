import styles from './aside.module.css';

function Aside() {
  return (
    <aside className={ styles.container }>
      <div className={ styles.logo }>
        <img src="/trybe.svg" alt="logo trybe" />
        <h1>A porta de entrada para sua carreira em tecnologia</h1>
      </div>
      <div className={ styles.logo }>
        <img
          style={ {
            width: '28px',
            height: '28px',
          } }
          src="/rocket.svg"
          alt="foguete"
        />
        <h2>
          Já são mais de 1700 pessoas estudantes da Trybe trabalhando na área
          tech.
        </h2>
      </div>
      <div className={ styles.logo }>
        <img
          style={ {
            width: '28px',
            height: '28px',
          } }
          src="/tag.svg"
          alt="tag"
        />
        <h2>
          Nosso currículo é desenhado em parceria com pessoas referência em
          tecnologia e as empresas mais buscadas para se trabalhar do mercado.
        </h2>
      </div>
      <div className={ styles.logo }>
        <img
          style={ {
            width: '28px',
            height: '28px',
          } }
          src="/trophy.svg"
          alt="troféu"
        />
        <h2>
          Preparamos você para encarar todos os desafios encontrados nos
          processos seletivos.
        </h2>
      </div>
    </aside>
  );
}

export default Aside;
