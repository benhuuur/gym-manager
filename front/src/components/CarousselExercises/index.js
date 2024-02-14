import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import kkk from "../../assets/Background/background.jpg"
import instructor from "../../assets/ModalStyle/home.jpg"
import ex from "../../assets/ModalStyle/eita.png"
import styles from "./styles.module.scss";

function ExercisesCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.body}>
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.c}>
      <Carousel.Item>
        <img text="Teste1" 
          className={styles.img}
          width={530}
          height={270}
          src={instructor}/>
        <Carousel.Caption>
          <h3>Instrutores</h3>
          <p>Descubra informações sobre nossos instrutores!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img text="Teste2" 
          className={styles.img}
          width={530}
          height={270}
          src={ex}/>
        <Carousel.Caption>
          <h3>Guia de exercícios</h3>
          <p>Como executá-los corretamente.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img text="Teste3" 
          className={styles.img}
          width={530}
          height={270}
          src={kkk}/>
        <Carousel.Caption>
          <h3>Nossos Planos</h3>
          <p>
            Descubra os Planos da Academia
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ExercisesCarousel;