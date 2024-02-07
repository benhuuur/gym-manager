import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./styles.module.scss";
import { Form } from "react-bootstrap";
import axios from "axios";

import { SECRET } from "../../env";
import CryptoJS from "crypto-js";
import { jwtDecode } from "jwt-decode";

function Newuser() {
  const [show, setShow] = useState(false);
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState(Date);
  function formatInput(value) {
    var newValue = value
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    setCpf(newValue);
  }
  function validCpf(cpf) {
    if (!cpf) return false;
    if (typeof cpf != "string") cpf = cpf.toString();
    const cpfSplit = cpf.replaceAll(".", "").replace("-", "");
    if (cpfSplit.length != 11) return false;
    var isSequencial = false;
    for (let i = 1; i < cpfSplit.length; i++) {
      if (parseInt(cpfSplit[i]) != parseInt(cpfSplit[i - 1])) {
        break;
      }
      isSequencial = true;
    }
    if (isSequencial) return false;
    var somaDig1 = 0;
    for (let i = 0; i < cpfSplit.length - 2; i++) {
      somaDig1 += Number(cpfSplit[i]) * (10 - i);
    }
    if (11 - (somaDig1 % 11) != cpfSplit[9]) return false;
    let somaDig2 = 0;
    for (let i = 0; i < cpfSplit.length - 1; i++) {
      somaDig2 += Number(cpfSplit[i]) * (11 - i);
    }
    if (11 - (somaDig2 % 11) != cpfSplit[10]) return false;
    return true;
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();
    const json = {
      cpf,
      name,
      birth,
      gym_id: sessionStorage.getItem("token")._id
    };
    const jsonCrypt = CryptoJS.AES.encrypt(
      JSON.stringify(json),
      SECRET
    ).toString();
    try {
      var res = await axios.get("http://localhost:8080/api/author", {
        jsonCrypt,
      });
      console.log(res);
      setCpf("");
      setName("");
      setBirth(Date);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Button className={styles.dark__content__button} onClick={handleShow}>
        Adicionar aluno
      </Button>

      <Modal
        centered={true}
        animation={true}
        contentClassName={styles.dark__content}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className={styles.dark__content__header} closeButton>
          <Modal.Title>Insira os dados do Aluno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className={styles.card__form}
            onSubmit={() => {
              return;
            }}
          >
            <Form.Control
              className={styles.card__input}
              placeholder="Insira o cpf"
              value={cpf}
              onChange={(e) => formatInput(e.target.value)}
            />
            <Form.Control
              className={styles.card__input}
              value={name}
              placeholder="Insira o Nome"
              onChange={(e) => setName(e.target.value)}
            />
            Data de nascimento
            <Form.Control
              className={styles.card__input}
              type="date"
              placeholder="Insira a data de nascimento"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer className={styles.dark__content__footer}>
          <Button
            className={styles.dark__content__button__close}
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button
            className={styles.dark__content__button}
            onClick={handleClose}
            type="submit"
          >
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Newuser;
