import { AppContext } from 'context/AppContext';
import { FC, useContext } from 'react';
import { useForm } from 'react-hook-form';

interface ShippingFormProps {
  onSubmit: (data: any) => void;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const ShippingForm: FC<ShippingFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { product } = useContext(AppContext);

  let anyDimensionLargerThanMax = false;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-x-20 px-10 pt-8">
        <label className="text-sm font-medium uppercase text-black">Width</label>
        <label className="text-sm font-medium uppercase text-black">Length</label>
        <input
          className={classNames(
            errors.width
              ? 'border-red-600 focus:border-red-600'
              : 'focus:border-blue-400',
            'w-full border-b border-solid border-gray-300 py-2 px-2 text-neutral-500 outline-none',
          )}
          autoFocus
          type="number"
          {...register('width', { required: true, valueAsNumber: true })}
        />
        <input
          className={classNames(
            errors.length
              ? 'border-red-600 focus:border-red-600'
              : 'focus:border-blue-400',
            'w-full border-b border-solid border-gray-300 py-2 px-2 text-neutral-500 outline-none',
          )}
          type="number"
          {...register('length', { required: true, valueAsNumber: true })}
        />
        {errors.width?.type === 'required' ? (
          <p className="text-xs text-red-600">Width is required</p>
        ) : (
          <div></div>
        )}
        {errors.length?.type === 'required' && (
          <p className="text-xs text-red-600">Length is required</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-x-20 px-10 py-8">
        <label className="text-sm font-medium uppercase text-black">Height</label>
        <label className="text-sm font-medium uppercase text-black">Weight</label>

        <input
          className={classNames(
            errors.height
              ? 'border-red-600 focus:border-red-600'
              : 'focus:border-blue-400',
            'w-full border-b border-solid border-gray-300 py-2 px-2 text-neutral-500 outline-none',
          )}
          type="number"
          {...register('height', { required: true, valueAsNumber: true })}
        />
        <input
          className={classNames(
            errors.weight
              ? 'border-red-600 focus:border-red-600'
              : 'focus:border-blue-400',
            'w-full border-b border-solid border-gray-300 py-2 px-2 text-neutral-500 outline-none',
          )}
          type="number"
          {...register('weight', { required: true, valueAsNumber: true })}
        />
        {errors.height?.type === 'required' ? (
          <p className="text-xs text-red-600">Height is required</p>
        ) : (
          <div></div>
        )}
        {errors.weight?.type === 'required' && (
          <p className="text-xs text-red-600">Weight is required</p>
        )}
      </div>
      {anyDimensionLargerThanMax && (
        <p className="px-3 text-sm text-red-600">
          We are so sorry, it seems like your package is too large for us to ship.
        </p>
      )}
      {product && <p className="px-3 text-base">Use this {product.name}.</p>}
      <div className="mt-4 flex justify-end pr-5">
        <button
          type="submit"
          className="inline-flex justify-center rounded border border-transparent bg-[#5fd063] px-4 py-2 text-base font-semibold text-green-100 shadow-[0_3px_0_0_#4fab55] hover:bg-[#4fab55] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        >
          Calculate
        </button>
      </div>
    </form>
  );
};

export default ShippingForm;
