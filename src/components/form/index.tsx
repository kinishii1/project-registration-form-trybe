import styles from './form.module.css';

type FormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Form({ handleSubmit }: FormProps) {
  return (
    <section className={ styles.container }>
      <form className={ styles.form } onSubmit={ handleSubmit }>
        <header className={ styles.form__header }>
          <h1>Crie sua conta na Trybe</h1>
          <p>Leva menos de 1 minuto!</p>
        </header>
        <div className={ styles.inputs }>
          <label htmlFor="name">Name</label>
          <small>Fique à vontade para usar seu nome social</small>
          <input id="name" type="text" placeholder="Maria Silva" />
        </div>
        <div className={ styles.inputs }>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="maria@betrybe.com" />
        </div>
        <button type="submit">Continuar</button>
      </form>
      <p className={ styles.link_form }>
        Já possui conta?
        {' '}
        <a href="https://betrybe.com">Faça Login</a>
      </p>
    </section>
  );
}

export default Form;
