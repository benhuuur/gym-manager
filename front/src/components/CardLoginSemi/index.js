import { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss"

//context
import { LoginContext } from "../../context/LoginContext";
import { AlertContext } from "../../context/AlertContext";

//ICONS
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

export default function CardLogin() {
    const { setMessage, setShow, setVariant } = useContext(AlertContext);
    const {cpf, setCpf} = useContext(LoginContext);
    const navigate = useNavigate();

    async function handleSubimit(e) {
        // e.preventDefaunt();
        // if (!loginValid) return
        // const json = {
        //     email, password
        // }
        // try {
        //     const jsonCrypt = CryptoJS.AES.encrypt(JSON.stringify(json), SECRET).toString();
        //     var res = await axios.post('http://localhost:8080/api/user/login,', {
        //         jsonCrypt
        //     })
        //     console.log(res);
        //     sessionStorage.setItem('token', res.toFormData.token);
        //     navigate('/completelogin')
        // }
        // catch (error) {
        //     console.log(error)
        //     setMessage('Falha no Login, verifique os dados e tente novamente')
        //     setShow(true);
        //     setVariant('danger');
        // }

    }

    function loginValid() {

        // var isSequencial = false

        // if (!cpf) {
        //     setMessage('Insira um Login válido');
        //     setShow(true);
        //     setVariant('danger');
        //     return false;
        // }

        // if (cpf.length != 11) {
        //     setMessage('Número de caracteres inválido');
        //     setShow(true);
        //     setVariant('danger');
        //     return false
        // }

        // for (let i = 1; i < cpf.length; i++) {
        //     if (cpf[i] == cpf[i - 1] && cpf[i] == cpf[i - 2])
        //         isSequencial = true
        // }

        // if (isSequencial == true) {
        //     setMessage('Login Sequencial, verifique os dados e tente novamente');
        //     setShow(true);
        //     setVariant('danger');
        //     return false
        // }
        // var somaDig1 = 0;

        // for (let i = 0; i < cpf.length - 2; i++)
        //     somaDig1 += (Number(cpf[i]) * (10 - i));

        // if ((11 - (somaDig1 % 11)) != cpf[9]) {
        //     setMessage('Primeiro Dígito Verificador Inválido');
        //     setShow(true);
        //     setVariant('danger');
        //     return false
        // }

        // let somaDig2 = 0;

        // for (let i = 0; i < cpf.length - 1; i++)
        //     somaDig2 += Number(cpf[i]) * (11 - i);

        // if ((11 - (somaDig2 % 11)) != cpf[10]) {
        //     setMessage('Segundo Dígito Verificador Inválido');
        //     setShow(true);
        //     setVariant('danger');
        //     return false
        // }
        // return true
    }

    return (
        <>
            <Card  border="dark" className={styles.card} bg='dark' text='warning'>
                <Card.Header className={styles.card__header}>
                    <Card.Title>Faça já seu Login</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form
                        className={styles.card__form}
                        onSubmit={handleSubimit}
                    >
                        <Form.Control className={styles.card__input}
                            value={cpf}
                            placeholder="Insira seu CPF"
                            onChange={(e) => setCpf(e.target.value)}
                        />
                        <Button
                            className={styles.card__form__button}
                            type='submit'
                            variant='secondary'
                        > CONTINUAR </Button>
                    </Form>
                    <div className={styles.allIcons}>
                    <a>Não possui uma conta?</a> &nbsp; &nbsp;
                    <div className={styles.spanIcon}><CIcon icon={icon.cilLightbulb} width="25" height="25"/></div>  
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}