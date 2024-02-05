import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap';

//components
import AlertComponent from '../../components/Alert';
import CardCompleteLogin from '../../components/CardLoginComplete';


export default function CompleteLoginPage() {
    return (
        <>
           <div className={styles.body}>
           <div className={styles.container}>   
                        <AlertComponent/>
                        <CardCompleteLogin/>
           </div>
           </div>
        </>
    );
}