import { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

//context
import { LoginContext } from "../../context/LoginContext";
import { AlertContext } from "../../context/AlertContext";

import { SECRET } from "../../env";
import CryptoJS from "crypto-js";
import { jwtDecode } from "jwt-decode";

//ICONS
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

export default function CardLoginFirstStep() {
  const { setMessage, setShow, setVariant } = useContext(AlertContext);
  const { login, setLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  // function formatInput(value) {
  //   var newValue = value
  //     .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
  //     .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
  //     .replace(/(\d{3})(\d)/, "$1.$2")
  //     .replace(/(\d{3})(\d{1,2})/, "$1-$2")
  //     .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  //   setCpf(newValue);
  // }
  async function handleSubimit(e) {
    e.preventDefault();
    if (!isLoginValid()) return;
    const json = {
      login,
    };
    try {
      const jsonCrypt = CryptoJS.AES.encrypt(
        JSON.stringify(json),
        SECRET
      ).toString();
      var res = await axios.post("http://localhost:8080/api/user/login", json);
      console.log(res);
      sessionStorage.setItem("token", res.data.token); // Correção para acessar o token corretamente
      navigate("/complete-login");
    } catch (error) {
      console.log(error);
      setMessage("Falha no Login, nenhum login encontrado");
      setShow(true);
      setVariant("danger");
    }
  }
  function isLoginValid() {
    if (!login) {
      setMessage("Insira um Login válido");
      setShow(true);
      setVariant("danger");
      return false;
    }
    // var isSequencial = false;
    // if (cpf.length != 11) {
    //   setMessage("Número de caracteres inválido");
    //   setShow(true);
    //   setVariant("danger");
    //   return false;
    // }
    // for (let i = 1; i < cpf.length; i++) {
    //   if (cpf[i] == cpf[i - 1] && cpf[i] == cpf[i - 2]) isSequencial = true;
    // }
    // if (isSequencial == true) {
    //   setMessage("Login Sequencial, verifique os dados e tente novamente");
    //   setShow(true);
    //   setVariant("danger");
    //   return false;
    // }
    // var somaDig1 = 0;
    // for (let i = 0; i < cpf.length - 2; i++)
    //   somaDig1 += Number(cpf[i]) * (10 - i);
    // if (11 - (somaDig1 % 11) != cpf[9]) {
    //   setMessage("Primeiro Dígito Verificador Inválido");
    //   setShow(true);
    //   setVariant("danger");
    //   return false;
    // }
    // let somaDig2 = 0;
    // for (let i = 0; i < cpf.length - 1; i++)
    //   somaDig2 += Number(cpf[i]) * (11 - i);
    // if (11 - (somaDig2 % 11) != cpf[10]) {
    //   setMessage("Segundo Dígito Verificador Inválido");
    //   setShow(true);
    //   setVariant("danger");
    //   return false;
    // }
    return true;
  }

  return (
    <>
      <Card border="dark" className={styles.card} bg="dark" text="warning">
        <Card.Header className={styles.card__header}>
          <Card.Title>Faça já seu Login</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form className={styles.card__form} onSubmit={handleSubimit}>
            <Form.Control
              className={styles.card__input}
              value={login}
              placeholder="Insira seu Login"
              onChange={(e) => setLogin(e.target.value)}
            />
            <Button
              className={styles.card__form__button}
              type="submit"
              variant="secondary"
            >
              {" "}
              CONTINUAR{" "}
            </Button>
          </Form>
          <div className={styles.allIcons}>
            <a>Não possui uma conta?</a> &nbsp; &nbsp;
            <div className={styles.spanIcon}>
              <CIcon icon={icon.cilLightbulb} width="25" height="25" />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
