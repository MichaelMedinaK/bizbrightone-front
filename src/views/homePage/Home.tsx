import React from "react";
import styles from "./Home.module.css";

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Panel Principal</h1>
        <p>Bienvenido al panel de control.</p>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Ondulados</p>
      </footer>
    </div>
  );
};

export default Home;
