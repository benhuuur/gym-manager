import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap';

//components
import AlertComponent from '../../components/Alert';
import LoginSecondStep from '../../components/CardLoginSecondStep';


export default function LoginFirstStep() {
    return (
        <>
           <div className={styles.body}>
           <div className={styles.container}>   
                        <AlertComponent/>
                        <LoginSecondStep/>
           </div>
           </div>
        </>
    );
}