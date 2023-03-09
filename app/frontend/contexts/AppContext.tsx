import type { Dimensions } from 'types/product';
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';

interface AppContextType {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  productsMaxDimensions: any;
  setDimensions: Dispatch<SetStateAction<undefined>>;
  dimensions: Dimensions | undefined;
}

interface Props {
  children: ReactNode;
}

export const AppContext = createContext<AppContextType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  dimensions: undefined,
  productsMaxDimensions: {},
  setDimensions: () => {},
});

export const AppContextProvider: FC<Props> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dimensions, setDimensions] = useState(undefined);
  const productsMaxDimensions = JSON.parse(document.getElementById('root')?.getAttribute('products_max_dimensions') || '{}');

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        dimensions,
        setDimensions,
        productsMaxDimensions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
