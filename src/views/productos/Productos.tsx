import React, { useState } from 'react';
import { Product } from '../../types/Product'; 
import ProductTable from '../../components/productos/ProductTable';
import ProductDetails from '../../components/productos/ProductDetails';

const Producto: React.FC = () => {
    const [productos, setProductos] = useState<Product[]>([
        { id: 1, nombre: 'Producto A', cantidad: 10, formato: 1, costoReal: 5.50, costoVenta: 10.00 },
        { id: 2, nombre: 'Producto B', cantidad: 5, formato: 12, costoReal: 2.00, costoVenta: 5.00 },
        { id: 3, nombre: 'Producto C', cantidad: 12, formato: 1, costoReal: 15.50, costoVenta: 20.00 },
        { id: 4, nombre: 'Producto D', cantidad: 8, formato: 12, costoReal: 8.00, costoVenta: 12.50 },
        { id: 5, nombre: 'Producto E', cantidad: 20, formato: 1, costoReal: 2.50, costoVenta: 6.00 },
      ]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleSaveProduct = (updatedProduct: Product) => {
    setProductos(productos.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    setSelectedProduct(null);
  };

  const handleCancelEdit = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="producto-container">
      <h1>Lista de Productos</h1>
      <ProductTable products={productos} onRowClick={handleProductSelect} />
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onSave={handleSaveProduct}
          onCancel={handleCancelEdit}
        />
      )}

    </div>
  );
};

export default Producto;