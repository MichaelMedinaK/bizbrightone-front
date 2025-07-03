import React, { useState, ChangeEvent } from 'react';
import { Product } from '../../types/Product';

interface ProductDetailsProps {
  product: Product;
  onSave: (updatedProduct: Product) => void;
  onCancel: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onSave, onCancel }) => {
  const [editingProduct, setEditingProduct] = useState<Product>({ ...product });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditingProduct(prevProduct => ({
      ...prevProduct,
      [name]: name === 'cantidad' || name === 'formato' || name === 'costoReal' || name === 'costoVenta' ? parseFloat(value) : value,
    }));
  };

  const handleSave = () => {
    onSave(editingProduct);
  };

  return (
    <div className="product-details">
      <h2>Detalles del Producto</h2>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={editingProduct.nombre} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="cantidad">Cantidad:</label>
          <input type="number" id="cantidad" name="cantidad" value={editingProduct.cantidad} onChange={handleChange} />
        </div>
          <div>
          <label htmlFor="formato">Formato:</label>
          <select id="formato" name="formato" value={editingProduct.formato} onChange={handleChange}>
            <option value={1}>Unidad</option>
            <option value={12}>Docena</option>
          </select>
        </div>
        <div>
          <label htmlFor="costoReal">Costo Real:</label>
          <input type="number" step="0.01" id="costoReal" name="costoReal" value={editingProduct.costoReal} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="costoVenta">Costo Venta:</label>
          <input type="number" step="0.01" id="costoVenta" name="costoVenta" value={editingProduct.costoVenta} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSave}>Guardar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default ProductDetails;