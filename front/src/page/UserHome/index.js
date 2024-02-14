import styles from "./styles.module.scss";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

//context
import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";

//components
import ClientForm from "../../components/Forms";
import ExercisesCarousel from "../../components/CarousselExercises";
import TrainingModal from "../../components/TrainingSheetModal";
import Footer from "../../components/Footer";
import ChartModal from "../../components/ChartModal";


export default function UserHome() {
  const [page, setPage] = useState(true);
  const { login, password, setPassword } = useContext(LoginContext);

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
            Anabelly Sthephany Paiva Montibeller{login}
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
        <div className={styles.content}>
        <ChartModal></ChartModal>
        <br></br>
        <br></br>
        <TrainingModal></TrainingModal>
        <br></br>
        <br></br>
        <ExercisesCarousel></ExercisesCarousel>
        </div>

      </div>
      <Footer></Footer>
    </>
  );
}
