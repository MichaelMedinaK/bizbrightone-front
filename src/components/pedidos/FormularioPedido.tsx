import React, { useState } from 'react';
import styles from './FormularioPedido.module.css';

interface FormularioPedidoProps {
    onClose: () => void;
    onGuardar: (pedido: any) => void;
}

const FormularioPedido: React.FC<FormularioPedidoProps> = ({ onClose, onGuardar }) => {
    const [nombrePersona, setNombrePersona] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [total, setTotal] = useState("");
    const [direccionEntrega, setDireccionEntrega] = useState('');
    const [detalles, setDetalles] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const nuevoPedido = {
            id: Date.now(),
            nombrePersona,
            descripcion,
            total: Number(total),
            direccionEntrega,
            detalles,
        };
        onGuardar(nuevoPedido);
        setNombrePersona('');
        setDescripcion('');
        setTotal("");
        setDireccionEntrega('');
        setDetalles('');
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <h2>Nuevo Pedido</h2>
                <button onClick={onClose} className={styles.cerrar}>X</button>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" value={nombrePersona} onChange={(e) => setNombrePersona(e.target.value)} required />

                    <label htmlFor="descripcion">Descripción:</label>
                    <input type="text" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />

                    <label htmlFor="total">Total:</label>
                    <input type="number" id="total" value={total} onChange={(e) => setTotal(e.target.value)} required />

                    <label htmlFor="direccion">Dirección:</label>
                    <input type="text" id="direccion" value={direccionEntrega} onChange={(e) => setDireccionEntrega(e.target.value)} required />

                    <label htmlFor="detalles">Detalles:</label>
                    <textarea id="detalles" value={detalles} onChange={(e) => setDetalles(e.target.value)}></textarea>

                    <button type="submit">Guardar</button>
                </form>
            </div>
        </div>
    );
};

export default FormularioPedido;