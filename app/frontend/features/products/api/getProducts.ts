import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../libs/axios';
import { ExtractFnReturnType } from '../../../libs/react-query';
import Product from '../../../types/product';

export type DimensionsDto = {
  weight: number;
  height: number;
  length: number;
  width: number;
};

export const getProducts = ({ weight, height, length, width }: any): Promise<Product> => {
  return axios.get(`/products/search`, {
    params: {
      weight,
      height,
      length,
      width,
    },
  });
};

type QueryFnType = typeof getProducts;

export const useProducts = (dimensions: DimensionsDto | undefined) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['products', dimensions],
    queryFn: () => getProducts(dimensions),
    enabled: !!dimensions,
  });
};
