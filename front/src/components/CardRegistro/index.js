import { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss"

//context
import { LoginContext } from "../../context/LoginContext";
import { AlertContext } from "../../context/AlertContext";


export default function Register() {

    function registerValid() {

    }

    return (
        <>
            <Card  border="dark" className={styles.card} bg='dark' text='warning'>
                <Card.Header className={styles.card__header}>
                    <Card.Title>Registre um novo Aluno</Card.Title>
                </Card.Header>
                <Card.Body>
                    {/* <Form
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
                    </Form> */}
                </Card.Body>
            </Card>
        </>
    );
}