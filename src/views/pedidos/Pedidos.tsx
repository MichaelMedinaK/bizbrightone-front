import React, { useState, useEffect } from "react";
import styles from "./Pedidos.module.css";
import DetallesPedido from "../../components/pedidos/DetallesPedido";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
import FormularioPedido from "../../components/pedidos/FormularioPedido";

interface Pedido {
  id: number;
  nombrePersona: string;
  descripcion: string;
  total: number;
  direccionEntrega: string;
  detalles: string;
}

const Pedidos: React.FC = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState<Pedido | null>(
    null
  );
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
  };

  const handleCerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  const handleNuevoPedido = (nuevoPedido: Pedido) => {
    setPedidos([...pedidos, nuevoPedido]);
    setMostrarFormulario(false);
  };

  useEffect(() => {
    const pedidosDePrueba: Pedido[] = [
      {
        id: 1,
        nombrePersona: "Juan Pérez",
        descripcion: "Pedido de prueba 1",
        total: 1500,
        direccionEntrega: "Calle Falsa 123",
        detalles: "Detalles del pedido 1: ...",
      },
      {
        id: 2,
        nombrePersona: "María Gómez",
        descripcion: "Pedido de prueba 2",
        total: 2000,
        direccionEntrega: "Avenida Siempreviva 456",
        detalles: "Detalles del pedido 2: ...",
      },
    ];
    setPedidos(pedidosDePrueba);
  }, []);

  const handleBuscar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
  };

  const pedidosFiltrados = pedidos.filter(
    (pedido) =>
      pedido.nombrePersona.toLowerCase().includes(busqueda.toLowerCase()) ||
      pedido.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleVerDetalles = (pedido: Pedido) => {
    setPedidoSeleccionado(pedido);
    setMostrarPopup(true);
  };

  const handleCerrarPopup = () => {
    setMostrarPopup(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <button onClick={handleMostrarFormulario}>
          <FontAwesomeIcon icon={faPlus} /> Ingresar Pedido
        </button>
        <div className={styles.buscar}>
          <input
            type="text"
            placeholder="Buscar pedido..."
            value={busqueda}
            onChange={handleBuscar}
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <select>
          <option value="">Filtrar por Total</option>
          <option value="asc">Menor a Mayor</option>
          <option value="desc">Mayor a Menor</option>
        </select>
        <select>
          <option value="">Filtrar por Nombre</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
      </div>

      <table className={styles.tabla}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Total</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidosFiltrados.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.nombrePersona}</td>
              <td>{pedido.descripcion}</td>
              <td>${pedido.total}</td>
              <td>{pedido.direccionEntrega}</td>
              <td>
                <button onClick={() => handleVerDetalles(pedido)}>
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {mostrarPopup && pedidoSeleccionado && (
        <DetallesPedido
          pedido={pedidoSeleccionado}
          onClose={handleCerrarPopup}
        />
      )}

      {mostrarFormulario && (
        <FormularioPedido
          onClose={handleCerrarFormulario}
          onGuardar={handleNuevoPedido}
        />
      )}
    </div>
  );
};

export default Pedidos;
