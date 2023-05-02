import { FC, useContext, useRef, useState } from 'react';
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
  const { data: product, isFetching } = useProducts(dimensions);
  const [disableButton, setDisableButton] = useState(false);
  const timeoutRef = useRef<any>(null);

  function onModalClose() {
    setIsModalOpen(false);
    setDisableButton(false);
    clearTimeout(timeoutRef.current);
  }

  const onSubmit = (values: any) => {
    setDisableButton(true);
    setDimensions(values);
    timeoutRef.current = setTimeout(() => {
      setDisableButton(false);
      setIsModalOpen(false);
    }, 5000);
  };

  return (
    <>
      <Hero />
      <div className="mt-12 mb-10 md:mt-8 flex justify-center">
        <Button
          onClick={() => { setIsModalOpen(true)}}
          className='w-56 h-14'
          size='lg'
        >
          Launch Calculator
        </Button>
      </div>
      {product && (
        <div className='m-10 flex justify-center'>
          <ProductCard product={product} />
        </div>
      )}
      <Modal
        onClose={onModalClose}
        title={"Shipping Calculator"}
        subtitle={"To calculate the costs associated with this shipping, please enter the dimensions of the package that you would like to send."}
      >
        <ShippingForm
          disableButton={disableButton}
          isLoading={isFetching}
          product={product}
          onSubmit={onSubmit}
        />
      </Modal>
    </>
  );
};
