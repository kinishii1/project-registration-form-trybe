import styles from './modal.module.css';

type MoldalProps = {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Modal({ handleSubmit }: MoldalProps) {
  return (
    <div className={ styles.modal }>
      <div className={ styles.modal__alert }>
        <h1>A Trybe agradece! 💚</h1>
        <button onClick={ handleSubmit }>Fechar</button>
      </div>
    </div>
  );
}

export default Modal;
