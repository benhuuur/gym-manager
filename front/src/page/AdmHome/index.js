import styles from "./styles.module.scss";
import Newuser from "../../components/FormNewUser";
import { Button, Card, Col, Row } from "react-bootstrap";
import PersonDetail from "../../components/PersonDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import AdmForm from "../../components/SetTraining";

export default function AdmHome() {
  var [persons, setPersons] = useState([]);
  async function handleDeleteClick(id) {
    console.log(id);
    const res = await axios.post(
      "http://localhost:8080/api/person/delete/" + id,
      { token: sessionStorage.getItem("token") }
    );
    console.log(res);
    window.location.reload();
  }
  const Render = () => {
    return persons.map((person, index) => {
      return (
        <Card bg="dark" className={styles.card} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className={styles.card__title}>
              {person.name}
            </Card.Title>
            <Card.Link>
              <PersonDetail id={person._id} />
            </Card.Link>
            <Card.Link>
              <AdmForm></AdmForm>
              <Button
                onClick={() => handleDeleteClick(person._id)}
                className={styles.card__button__delete}
              >
                Deletar
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      );
    });
  };
  async function getPersons() {
    const token = sessionStorage.getItem("token");
    const id = jwtDecode(token).id;
    const res = await axios.get("http://localhost:8080/api/person/gym/" + id);
    setPersons(res.data.persons);
  }
  useEffect(() => {
    getPersons();
  }, []);

  return (
    <>
      <div className={styles.body}>
        <Col className={styles.container}>
          <Row className={styles.container__row}>
            <Col xs={1} sm={1} md={1} className={styles.container__row__col}>
              <div>
                <Newuser />
              </div>
            </Col>
          </Row>
          <div className={styles.cards}>
            <Render />
          </div>
        </Col>
      </div>
    </>
  );
}
