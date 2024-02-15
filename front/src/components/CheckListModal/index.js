import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./styles.module.scss";
import { Form, Button } from "react-bootstrap";

//components


export default function CheckListModal() {
  const [show, setShow] = useState(false);
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
  const handleOpen = () => setShow(true)
  return (
    <>
      <Button
      className={styles.dark__content__button}
      onClick={handleOpen}
      >
      CheckList de Objetivos
      </Button>
      <Modal
        show={show}
        centered={true}
        animation={true}
        contentClassName={styles.dark__content}
      >
        <Modal.Header className={styles.dark__content__header}>
          <Modal.Title>Meus Objetivos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className={styles.card__form} onSubmit={handleSubmit}>
           
          </Form>
        </Modal.Body>
        <Modal.Footer className={styles.dark__content__footer}>
          <Button
            className={styles.dark__content__button}
            onClick={handleClose}
          >
            Fechar CheckList de Objetivos
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
