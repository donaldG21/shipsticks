import { Dialog, Transition } from '@headlessui/react';
import { useProducts } from 'features/products/api/getProducts';
import { FC, Fragment, useContext, useState } from 'react';
import { AppContext } from 'contexts/AppContext';
import { ShippingForm } from 'components/Form/ShippingForm';

interface ModalProps {}

export const Modal: FC<ModalProps> = () => {
  const { setProduct, isModalOpen, setIsModalOpen } = useContext(AppContext);

  const [dimensions, setDimensions] = useState();
  const { isLoading, error, data } = useProducts(dimensions);

  setProduct(data);

  const onSubmit = (values: any) => {
    setDimensions(values);
    setTimeout(() => setIsModalOpen(false), 5000);
  };

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-9 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Shipping Calculator
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      To calculate the costs associated with this shipping, please enter
                      the dimensions of the package that you would like to send.
                    </p>
                  </div>
                  <ShippingForm onSubmit={onSubmit} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
