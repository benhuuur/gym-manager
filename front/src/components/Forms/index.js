import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./styles.module.scss";
import { Form, Button } from "react-bootstrap";

export default function ClientForm() {
  const [show, setShow] = useState(true);
  async function handleSubmit(e) {
    e.preventDefault();

    // Uncomment and complete the login logic as needed
    // try {
    //     const jsonCrypt = CryptoJS.AES.encrypt(JSON.stringify(json), SECRET).toString();
    //     const res = await axios.post('http://localhost:8080/api/user/password/login', {
    //         jsonCrypt
    //     });
    //     console.log(res);
    //     sessionStorage.setItem('token', res.toFormData.token);
    //     navigate('/completelogin');
    // } catch (error) {
    //     console.log(error);
    //     setMessage('Falha no Login, verifique os dados e tente novamente');
    //     setShow(true);
    //     setVariant('danger');
    // }
  }
  const handleClose = () => setShow(false);
  return (
    <>
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
            Física
            <Form.Control
              className={styles.card__input}
              placeholder="Insira seu Peso"
              onChange={(e) => console.log(e.target.value)}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Insira sua Altura"
              onChange={(e) => console.log(e.target.value)}
            />
            Treinos
            <Form.Control
              className={styles.card__input}
              placeholder="Insira seu Objetivo"
              onChange={(e) => console.log(e.target.value)}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Insira sua Experiencia"
              onChange={(e) => console.log(e.target.value)}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Insira seu tempo disponivel para treino"
              onChange={(e) => console.log(e.target.value)}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Insira quantos dias disponiveis para treino na semana"
              onChange={(e) => console.log(e.target.value)}
            />
            Observações
            <Form.Control
              className={styles.card__input}
              placeholder="Observações"
              as="textarea"
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
