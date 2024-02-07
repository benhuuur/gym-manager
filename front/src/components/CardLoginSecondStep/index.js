import { useContext } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

// Contexts
import { LoginContext } from "../../context/LoginContext";
import { AlertContext } from "../../context/AlertContext";

export default function CardLoginSecondStep() {
  // Destructure values from contexts
  const { setMessage, setShow, setVariant } = useContext(AlertContext);
  const { cpf, password, setPassword } = useContext(LoginContext);
  const navigate = useNavigate();

  // Handle form submission
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

  // Placeholder for login validation logic
  function isLoginValid() {
    // Implement your login validation logic here
    // Return true if login is valid, false otherwise
  }

  return (
    <>
      <Card border="dark" className={styles.card} bg="dark" text="warning">
        <Card.Header className={styles.card__header}>
          <Card.Title>Complete seu Login</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form className={styles.card__form} onSubmit={handleSubmit}>
            {/* Display CPF value (disabled for editing) */}
            <Form.Control
              className={styles.card__input}
              value={cpf}
              placeholder={cpf}
              disabled
            />
            {/* Input for password */}
            <Form.Control
              className={styles.card__input}
              value={password}
              placeholder="Insira sua Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Submit button */}
            <Button
              className={styles.card__form__button}
              type="submit"
              variant="success"
            >
              ACESSAR
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
