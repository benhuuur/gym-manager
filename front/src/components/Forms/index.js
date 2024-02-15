import { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./styles.module.scss";
import { Form, Button } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

import { SECRET } from "../../env";
import CryptoJS from "crypto-js";
import { AlertContext } from "../../context/AlertContext";
import { Navigate } from "react-router-dom";

export default function ClientForm() {
  const [show, setShowCard] = useState(true);
  const [weight, setPeso] = useState();
  const [height, setAltura] = useState();
  const [objective, setObjetivo] = useState("");
  const [experience, setExperiencia] = useState("");
  const [frequency, setTempo] = useState("");
  const [trainingTime, setDias] = useState("");
  const [obs, setObs] = useState("");
  const { setMessage, setShow, setVariant } = useContext(AlertContext);

  async function Render() {
    var token = sessionStorage.getItem("token");
    token = jwtDecode(token);
    const res = await axios.get("http://localhost:8080/api/person/" + token.id);
    const person = res.data.person;
    console.log(res);
    if (!person.isFirst) {
      setShowCard(false);
    }
  }

  useEffect(() => {
    Render();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    var token = sessionStorage.getItem("token");

    token = jwtDecode(token);
    console.log(token)
    // Uncomment and complete the login logic as needed
    const json = {
      id: token.id,
      weight,
      height,
      objective,
      experience,
      frequency,
      trainingTime,
      obs,
    };
    try {
      const res = await axios.post("http://localhost:8080/api/person/update/", 
        json,
      );
      console.log(res);
      handleClose()
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      setShow(true);
      setVariant("danger");
    }
  }
  const handleClose = () => setShowCard(false);
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
              onChange={(e) => setPeso(e.target.value)}
              value={weight}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Insira sua Altura"
              onChange={(e) => setAltura(e.target.value)}
              value={height}
            />
            Treinos
            <Form.Control
              className={styles.card__input}
              placeholder="Insira seu Objetivo"
              onChange={(e) => setObjetivo(e.target.value)}
              value={objective}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Insira sua Experiencia"
              onChange={(e) => setExperiencia(e.target.value)}
              value={experience}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Insira seu tempo disponivel para treino"
              onChange={(e) => setTempo(e.target.value)}
              value={frequency}
            />
            <Form.Control
              className={styles.card__input}
              placeholder="Insira quantos dias disponiveis para treino na semana"
              onChange={(e) => setDias(e.target.value)}
              value={trainingTime}
            />
            Observações
            <Form.Control
              className={styles.card__input}
              placeholder="Observações"
              as="textarea"
              onChange={(e) => setObs(e.target.value)}
              value={obs}
            />
            <Modal.Footer className={styles.dark__content__footer}>
              <Button type="submit" className={styles.dark__content__button}>
                Salvar Informações
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
