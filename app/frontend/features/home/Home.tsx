import { FC, useContext } from 'react';

import { Button } from 'components/Button';
import { ShippingForm } from 'components/Form';
import { Hero } from 'components/Hero';
import { Modal } from 'components/Modal/Modal';
import { ProductCard } from 'components/Product/ProductCard';
import { AppContext } from 'contexts/AppContext';
import { useProducts } from 'features/products/api/useProducts';

export const Home: FC = () => {
  const { dimensions, setDimensions, setIsModalOpen } = useContext(AppContext);
  const { data: product } = useProducts(dimensions);

  const onSubmit = (values: any) => {
    setDimensions(values);
    setTimeout(() => setIsModalOpen(false), 5000);
  };

  return (
    <>
      <Hero />
      <div className="mt-12 mb-10 flex justify-center md:mt-7">
        <Button text={'Launch Calculator'} onClick={() => setIsModalOpen(true)} />
      </div>
      {product && (
        <div className="m-10 flex justify-center">
          <ProductCard product={product} />
        </div>
      )}
      <Modal
        title="Shipping Calculator"
        subtitle="To calculate the costs associated with this shipping, please enter
                  the dimensions of the package that you would like to send."
      >
        <ShippingForm product={product} onSubmit={onSubmit} />
      </Modal>
    </>
  );
};
