import React from 'react';
import { Product } from '../../types/Product';
import styles from './ProductRow.module.css';

interface ProductRowProps {
  product: Product;
  onClick?: () => void;
}

const ProductRow: React.FC<ProductRowProps> = ({ product, onClick }) => {
  const ganancia = product.costoVenta - product.costoReal;
  return (
    <tr className={styles.row} onClick={onClick}>
      <td>{product.id}</td>
      <td>{product.nombre}</td>
      <td>{product.cantidad}</td>
      <td>{product.formato}</td>
      <td>{product.costoReal.toFixed(2)}</td> 
      <td>{product.costoVenta.toFixed(2)}</td> 
      <td>{ganancia.toFixed(2)}</td> 
    </tr>
  );
};

export default ProductRow;