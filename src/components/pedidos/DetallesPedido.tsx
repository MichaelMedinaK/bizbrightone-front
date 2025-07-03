import React from "react";
import styles from "./DetallesPedido.module.css";

interface DetallesPedidoProps {
  pedido: {
    detalles: string;
    nombrePersona: string;
    descripcion: string;
    total: number;
    direccionEntrega: string;
  };
  onClose: () => void;
}

const DetallesPedido: React.FC<DetallesPedidoProps> = ({ pedido, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>Detalles del Pedido</h2>
        <button onClick={onClose} className={styles.cerrar}>
          X
        </button>
        <p>
          <strong>Nombre:</strong> {pedido.nombrePersona}
        </p>
        <p>
          <strong>Descripción:</strong> {pedido.descripcion}
        </p>
        <p>
          <strong>Total:</strong> ${pedido.total}
        </p>
        <p>
          <strong>Dirección:</strong> {pedido.direccionEntrega}
        </p>
        <p>{pedido.detalles}</p>
      </div>
    </div>
  );
};

export default DetallesPedido;
