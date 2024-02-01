import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles.module.scss'
import logo from '../../assets/Logo/logo.png'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';


function NavbarComponent() {
  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
      {/* <Navbar.Brand href="#home"> */}
            {/* <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand> */}
        <Navbar.Brand href="#home">Fake Natty Co. and <div className={styles.span}>Your Gym</div></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
           <Navbar.Text>
            <div className={styles.allIcons}>
            <a>Relatar um problema</a> &nbsp; &nbsp;
            <div className={styles.spanIcon}><CIcon icon={icon.cilFrown} width="25" height="25"/></div>  
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;