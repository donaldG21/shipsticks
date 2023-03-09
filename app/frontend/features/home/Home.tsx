import { FC, useContext } from 'react';
import { Modal } from 'components/Modal/Modal';
import { AppContext } from 'contexts/AppContext';
import { ProductCard } from 'components/Product/ProductCard';
import { Button } from 'components/Button';
import { Hero } from 'components/Hero';

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  const { product, setIsModalOpen } = useContext(AppContext);

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
      <Modal />
    </>
  );
};
