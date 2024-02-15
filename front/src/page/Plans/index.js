import React from "react";
import styles from "./styles.module.scss"
import { NavLink } from "react-router-dom";

const Workouts = () => {
  return (
    <div className={styles.workoutsContainer}>
      <br />
      <h2>PRICING AND PLANS</h2>
      <br />

      <div className={styles.classContainer}>
        <NavLink to="/schedule">
          <div className={`${styles.classDetailsContainer} ${styles.resistance}`}>
              <p className={styles.title}>STANDART</p>
              <p className={styles.description}>
                q nao sei oq n sei oq la
              </p>
          </div>
           <div className={`${styles.classDetailsContainer} ${styles.ride}`}>
              <p className={styles.title}>PREMIUM</p>
              <p className={styles.description}>
                muito caro $$$$$$$
              </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Workouts;