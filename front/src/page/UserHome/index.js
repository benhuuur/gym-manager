import styles from "./styles.module.scss";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ClientForm from "../../components/Forms";
import { useState } from "react";

export default function UserHome() {
  const [page, setPage] = useState(true);
  function Render() {
    if (page) {
      return <>Dados</>;
    } else {
      return <>Treino</>;
    }
  }
  return (
    <>
      <ClientForm></ClientForm>
      <div className={styles.body}>
        <Dropdown className={styles.dropdown} data-bs-theme="dark">
          <Dropdown.Toggle className={styles.dropdown__toggle}
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Sei la
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setPage(true)}>
              Meus dados
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setPage(false)}>
              Ficha de treino
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {Render()}
      </div>
    </>
  );
}
