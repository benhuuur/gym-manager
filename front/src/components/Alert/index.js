import { useContext } from "react";
import { Alert } from "react-bootstrap";
import { AlertContext } from "../../context/AlertContext";
import { Col } from "react-bootstrap";
import styles from "./styles.module.scss";
export default function AlertComponent() {
  const { message, variant, show, setShow } = useContext(AlertContext);
  return (
    <>
      <Col md={3}>
        <Alert
          show={show}
          variant={variant}
          onClose={() => setShow(false)}
          dismissible
        >
          <p className={styles.alert}>{message}</p>
        </Alert>
      </Col>
    </>
  );
}
