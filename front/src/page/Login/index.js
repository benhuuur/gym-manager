import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap';


//components
import AlertComponent from '../../components/Alert';
import CardLogin from '../../components/CardLoginSemi';

export default function LoginPage() {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <AlertComponent />
                    <CardLogin />
                </div> 
            </div>
        </>
    );
}