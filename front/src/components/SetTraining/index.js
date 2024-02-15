import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./styles.module.scss";
import { Form, Button } from "react-bootstrap";
import { useContext } from "react";
import { TrainingContext } from "../../context/TrainingContext";

export default function AdmForm() {
  const [setEx1, setEx2, setEx3, setEx4, setEx5, setEx6, setEx7] = useContext(TrainingContext);
  const [show, setShow] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
  }

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      <Button
        className={styles.dark__content__button}
        onClick={handleOpen}
      >
        Atribuir Treino a: 
      </Button>
      <Modal
        show={show}
        centered={true}
        animation={true}
        contentClassName={styles.dark__content}
      >
        <Modal.Header className={styles.dark__content__header}>
          <Modal.Title>Insira seus dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className={styles.card__form} onSubmit={handleSubmit}>
            Treinos
            <Form.Control
              className={styles.card__input}
              placeholder="Treino 1"
              onChange={(e) => setEx1(e.target.value)}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Treino 1"
              onChange={(e) => setEx2(e.target.value)}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Treino 1"
              onChange={(e) => console.log(e.target.value)}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Quinta"
              onChange={(e) => console.log(e.target.value)}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Sexta"
              onChange={(e) => console.log(e.target.value)}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Sábado"
              onChange={(e) => console.log(e.target.value)}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Domingo"
              onChange={(e) => console.log(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer className={styles.dark__content__footer}>
          <Button
            className={styles.dark__content__button}
            onClick={handleClose}
          >
            Salvar Informações
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
