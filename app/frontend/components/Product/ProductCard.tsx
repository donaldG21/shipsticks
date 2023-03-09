import React, { FC } from 'react'
import Product from 'types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-3/5 shadow-card border-gray-300 border flex justify-center rounded-2xl bg-white">
      <h2 className="p-8 px-3 text-xl font-semibold">
        Use our "{`${product.type} - ${product.name}`}" to ship!
      </h2>
    </div>
  )
}
