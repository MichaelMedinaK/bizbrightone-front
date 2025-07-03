import React from "react";
import styles from "./Boton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface BotonProps {
  nombre: string;
  icono?: typeof faSearch;
  onClick?: () => void;
  className?: string;
}

const ButtonGeneric: React.FC<BotonProps> = ({
  nombre,
  icono,
  onClick,
  className,
}) => {
  return (
    <button className={`${styles.boton} ${className || ""}`} onClick={onClick}>
      {icono && <FontAwesomeIcon icon={icono} className={styles.icono} />}
      {nombre}
    </button>
  );
};

export default ButtonGeneric;
