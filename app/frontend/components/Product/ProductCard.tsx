import { FC } from 'react';
import Product from 'types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="md:w-3/4 w-11/12 shadow-card border-gray-300 border flex justify-center rounded-xl bg-white">
      <h2 className="py-6 px-9 text-center text-xl font-semibold">
        Use our "{`${product.type} - ${product.name}`}" to ship!
      </h2>
    </div>
  )
};
