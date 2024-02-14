import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./styles.module.scss";
import { Form, InputGroup } from "react-bootstrap";

export default function PersonDetail(props) {
  const [show, setShow] = useState(false);
  const [person, setPerson] = useState({});
  const [yearsOld, setYearsOld] = useState(0);

  async function getUser() {
    const res = await axios.get("http://localhost:8080/api/person/" + props.id);
    setPerson(res.data.person);
    toYearsOld(res.data.person.birth);
  }

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);
    getUser();
  };

  async function toYearsOld(date) {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(date).getFullYear();
    setYearsOld(currentYear - birthYear);
  }

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
          <Modal.Title>Visão Detalhada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.card__section}>Dados Pessoais</div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              className={styles.card__input}
              value={person.name}
              disabled
            />
          </Form.Group>
          <div className={styles.card__groups}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Idade:</Form.Label>
              <Form.Control
                className={styles.card__input__half}
                value={yearsOld}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Altura:</Form.Label>
              <InputGroup>
                <Form.Control
                  className={styles.card__input__half}
                  value={person.height}
                  disabled
                />
                <InputGroup.Text>m</InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Peso:</Form.Label>
              <InputGroup>
                <Form.Control
                  className={styles.card__input__half}
                  value={person.weight}
                  disabled
                />
                <InputGroup.Text>Kg</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </div>
          <div className={styles.card__section}>Dados do Treino</div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Objetivo:</Form.Label>
            <Form.Control
              className={styles.card__input}
              value={person.objective}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Experiência de Treino:</Form.Label>
            <Form.Control
              className={styles.card__input}
              value={person.experience}
              disabled
            />
          </Form.Group>
          <div className={styles.card__groups}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tempo disponivel de Treino:</Form.Label>
              <InputGroup>
                <Form.Control
                  className={styles.card__input__half}
                  value={person.trainingTime}
                  disabled
                />
                <InputGroup.Text>Minutos</InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Frequência de Treino na semana:</Form.Label>
              <InputGroup>
                <Form.Control
                  className={styles.card__input__half}
                  value={person.frequency}
                  disabled
                />
                <InputGroup.Text>Dias</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Folha de Treino:</Form.Label>
            <Form.Control
              className={styles.card__input}
              value={person.sheet}
              disabled
            />
          </Form.Group>
        </Modal.Body>
      </Modal>
    </>
  );
}
