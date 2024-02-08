import styles from "./styles.module.scss";
import Newuser from "../../components/FormNewUser";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AdmHome() {
  var [persons, setPersons] = useState([]);
  function handleClick() {}
  function Render() {
    return persons.map((artigo, index) => {
      return (
        <Card key={index} className={styles.card}>
          <Card.Title className={styles.card__title}>{artigo.title}</Card.Title>
          <Card.Body className={styles.card__body}>
            <Card.Text className={styles.card__body__article}>
              {persons.Name}
            </Card.Text>
            <div className="d-flex align-items-center ">
              {persons.Height}
              <Button
                variant="light"
                onClick={() => handleClick(persons._id)}
              ></Button>
            </div>
          </Card.Body>
        </Card>
      );
    });
  }
  async function getPersons() {
    const res = await axios.get("http://localhost:8080/api/person/");
    setPersons(res.data);
    console.log(res);
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
        </Col>
      </div>
    </>
  );
}
