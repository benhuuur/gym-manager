import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./styles.module.scss";
import { Form } from "react-bootstrap";

export default function PersonDetail(props) {
  const [show, setShow] = useState(false);
  const [person, setPerson] = useState({});
  async function getUser() {
    const res = await axios.get("http://localhost:8080/api/person/" + props.id);
    setPerson(res.data.person);
    console.log(res.data.person)
  }
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    getUser();
  };

  return (
    <>
      <Button onClick={handleShow} className={styles.button}>
        Detalhes
      </Button>
      <Modal
        centered={true}
        animation={true}
        contentClassName={styles.dark__content}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className={styles.dark__content__header} closeButton>
          <Modal.Title>Dados de {person.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {person.height}
          {person.weight}
          {person.trainingTime}
          {person.objective}
        </Modal.Body>
      </Modal>
    </>
  );
}
