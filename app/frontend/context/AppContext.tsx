import { DimensionsDto } from 'features/products/api/getProducts';
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';

interface AppContextType {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  setDimensions: Dispatch<SetStateAction<undefined>>;
  dimensions: DimensionsDto | undefined;
  setProduct: Dispatch<SetStateAction<any>>;
  product: any;
}

interface Props {
  children: ReactNode;
}

export const AppContext = createContext<AppContextType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  dimensions: undefined,
  setDimensions: () => {},
  product: undefined,
  setProduct: () => {},
});

export const AppContextProvider: FC<Props> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dimensions, setDimensions] = useState(undefined);
  const [product, setProduct] = useState(undefined);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        dimensions,
        setDimensions,
        product,
        setProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
