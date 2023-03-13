import { FC } from 'react';

import { Product } from 'types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="shadow-card flex w-11/12 max-w-5xl justify-center rounded-xl border border-gray-300 bg-white md:w-3/4">
      <h2 className="py-6 px-9 text-center text-xl font-semibold">
        Use our {`"${product.type} - ${product.name}"`} to ship!
      </h2>
    </div>
  );
};
