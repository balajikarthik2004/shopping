import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  title: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  return (
    <section id="products" className="mt-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};