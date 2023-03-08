import { FC, useContext } from 'react';
import Modal from '../../components/Modal/Modal';
import { AppContext } from '../../contexts/AppContext';
import Hero from '../../components/Hero/Hero';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const { product, setIsModalOpen } = useContext(AppContext);

  return (
    <>
      <Hero />
      <div className="mb-10 flex flex-row items-center justify-center">
        <button
          className="h-11 content-center rounded bg-[#5fd063] px-6 py-3 font-bold text-white shadow-[0_3px_0_0_#4fab55] outline-none hover:bg-[#4fab55] focus:outline-none"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          Launch Calculator
        </button>
      </div>
      {product && (
        <div className="m-20 flex flex-row items-center justify-center rounded-2xl bg-white">
          <h2 className="p-8 px-3 text-center text-xl font-semibold">
            Use our "{`${product.type} - ${product.name}`}" to ship!
          </h2>
        </div>
      )}
      <Modal />
    </>
  );
};

export default Home;
