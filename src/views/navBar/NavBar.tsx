import React, { useState } from "react";
import styles from "./navBar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import ButtonRedirect from "../../components/Buttons/ButtonRedirect/ButtonRedirect";

export const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();

  const isHomePage = location.pathname === "/homePanel";
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.div}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo de Ondulados" className={styles.logo} />
          <h1 className={styles.title}>Ondulados</h1>
        </div>
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </header>

      {!isHomePage && (
        <button
          className={styles.navLink}
          onClick={() => {
            navigate("/homePanel");
          }}
        >
          <FontAwesomeIcon icon={faHome} /> Volver
        </button>
      )}
      <nav className={styles.nav}>
        <ul
          className={`${styles.navList} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <ButtonRedirect to="/pedidos" content="PEDIDOS" />
          <ButtonRedirect to="/clientes" content="CLIENTES" />
          <ButtonRedirect to="/gastos" content="DINERO" />
          <ButtonRedirect to="/productos" content="PRODUCTOS" />
          <ButtonRedirect to="/inventario" content="INVENTARIO" />
        </ul>
      </nav>
    </div>
  );
};
