import React from "react";
import styles from "./styles.module.scss"
import { NavLink } from "react-router-dom";

const Workouts = () => {
  return (
    <div className={styles.workoutsContainer}>
      <br />
      <h2 className={styles.worktitle}>PRICING AND PLANS</h2>
      <br />

      <div className={styles.classContainer}>
        <NavLink to="/">
          <div className={`${styles.classDetailsContainer} ${styles.resistance}`}>
              <p className={styles.title}>STANDART</p>
              <p className={styles.description}>
              For just $24 a month, you gain access to a comprehensive range 
              of state-of-the-art facilities and expert guidance to help you reach your 
              fitness goals.
              </p>
          </div>
           <div className={`${styles.classDetailsContainer} ${styles.ride}`}>
              <p className={styles.title}>PREMIUM</p>
              <p className={styles.description}>
              Introducing our elite gym membership plan <br></br> for only $60 a month! 
              </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Workouts;