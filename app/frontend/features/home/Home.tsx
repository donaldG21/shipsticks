import { FC, useContext } from 'react';
import { Modal } from 'components/Modal/Modal';
import { AppContext } from 'contexts/AppContext';
import { ProductCard } from 'components/Product/ProductCard';
import { Button } from 'components/Button';
import { Hero } from 'components/Hero';
import { ShippingForm } from 'components/Form';
import { useProducts } from 'features/products/api/useProducts';

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  const { dimensions, setDimensions, setIsModalOpen } = useContext(AppContext);
  const { data: product } = useProducts(dimensions);

  const onSubmit = (values: any) => {
    setDimensions(values);
    setTimeout(() => setIsModalOpen(false), 5000);
  };

  return (
    <>
      <Hero />
      <div className="mt-12 mb-10 md:mt-7 flex justify-center">
        <Button text={'Launch Calculator'} onClick={() => setIsModalOpen(true)}  />
      </div>
      {product && (
        <div className='m-10 flex justify-center'>
          <ProductCard product={product}/>
        </div>
      )}
      <Modal>
        <ShippingForm product={product} onSubmit={onSubmit} />
      </Modal>
    </>
  );
};
