export type Dimensions = {
  weight: number;
  height: number;
  length: number;
  width: number;
};

export type Product = Dimensions & {
  id: string;
  name: string;
  type: string;
}
