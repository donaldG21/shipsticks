import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <header>
      <div className="mx-auto mb-5 mt-12 flex max-w-7xl flex-col items-center px-4 lg:mt-[100px]">
        <h1 className="text-center text-6xl font-bold text-white lg:text-7xl">
          Ship Your Golf Clubs Ahead
        </h1>
        <h2 className="mt-7 px-3 text-center text-[32px] font-semibold text-white">
          Safe, convenient, and hassle-free travel. Guaranteed.
        </h2>
      </div>
    </header>
  );
};
