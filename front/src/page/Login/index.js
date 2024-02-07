import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap';


//components
import AlertComponent from '../../components/Alert';
import CardLoginFirstStep from '../../components/CardLoginFirstStep';

export default function Login() {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <AlertComponent />
                    <CardLoginFirstStep />
                </div> 
            </div>
        </>
    );
}