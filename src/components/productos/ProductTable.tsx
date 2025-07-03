import React from 'react';
import { Product } from '../../types/Product';
import ProductRow from './ProductRow';
import styles from './ProductTable.module.css'; 

interface ProductTableProps {
  products: Product[];
  onRowClick?: (product: Product) => void; 
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onRowClick }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Formato</th>
          <th>Costo Real</th>
          <th>Costo Venta</th>
          <th>Ganancia</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
            onClick={() => onRowClick && onRowClick(product)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;