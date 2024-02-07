import styles from "./styles.module.scss";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ClientForm from "../../components/Forms"

export default function UserHome() {
  return (
    <>
  <ClientForm></ClientForm>
      <div className={styles.body}>
        <Dropdown className={styles.dropdown} data-bs-theme="dark">
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            KKKKKKKKKKKKKKK
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
