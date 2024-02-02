import { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss"

//context
import { LoginContext } from "../../context/LoginContext";
import { AlertContext } from "../../context/AlertContext";


export default function CardCompleteLogin() {
    const { setMessage, setShow, setVariant } = useContext(AlertContext);
    const {cpf, password, setPassword} = useContext(LoginContext);
    const navigate = useNavigate();

    async function handleSubimit(e) {
        // e.preventDefaunt();
        // if (!loginValid) return
        // const json = {
        //     email, password
        // }
        // try {
        //     const jsonCrypt = CryptoJS.AES.encrypt(JSON.stringify(json), SECRET).toString();
        //     var res = await axios.post('http://localhost:8080/api/user/password/login,', {
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

    }

    return (
        <>
            <Card  border="dark" className={styles.card} bg='dark' text='warning'>
                <Card.Header className={styles.card__header}>
                    <Card.Title>Complete seu Login</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form
                        className={styles.card__form}
                        onSubmit={handleSubimit}
                    >
                        <Form.Control className={styles.card__input}
                            value={cpf}
                            placeholder={cpf}
                            disabled
                        />
                        <Form.Control className={styles.card__input}
                            value={password}
                            placeholder="Insira sua Senha"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            className={styles.card__form__button}
                            type='submit'
                            variant='success'
                        > ACESSAR </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}