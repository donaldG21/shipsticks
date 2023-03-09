import { AppContext } from 'contexts/AppContext';
import { FC, useContext } from 'react';
import { useForm } from 'react-hook-form';

interface ShippingFormProps {
  onSubmit: (data: any) => void;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export const ShippingForm: FC<ShippingFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitting, isLoading },
  } = useForm();
  const { product, productsMaxDimensions: { weight, height, length, width }} = useContext(AppContext);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-x-20 px-8 pt-8">
        <label className="text-sm font-medium uppercase text-black">Width</label>
        <label className="text-sm font-medium uppercase text-black">Length</label>
        <input
          className={classNames(
            errors.width
              ? 'border-red-600 focus:border-red-600'
              : 'focus:border-blue-400 border-gray-300',
            'w-full border-b border-solid py-2 px-2 text-neutral-500 outline-none',
          )}
          autoFocus
          type="number"
          {...register('width', { required: true, min: 0, max: width, valueAsNumber: true })}
        />
        <input
          className={classNames(
            errors.length
              ? 'border-red-600 focus:border-red-600'
              : 'focus:border-blue-400 border-gray-300',
            'w-full border-b border-solid py-2 px-2 text-neutral-500 outline-none',
          )}
          type="number"
          {...register('length', { required: true, min: 0, max: length, valueAsNumber: true })}
        />
        {errors.width ? (
          <p className="text-xs text-red-600">Width is { errors.width?.type === 'required' ? 'required' : 'too wide' }.</p>
        ) : (
          <div></div>
        )}
        {errors.length && (
          <p className="text-xs text-red-600">Length is { errors.length?.type === 'required' ? 'required' : 'too large' }.</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-x-20 px-8 py-8">
        <label className="text-sm font-medium uppercase text-black">Height</label>
        <label className="text-sm font-medium uppercase text-black">Weight</label>

        <input
          className={classNames(
            errors.height
              ? 'border-red-600 focus:border-red-600'
              : 'focus:border-blue-400 border-gray-300',
            'w-full border-b border-solid py-2 px-2 text-neutral-500 outline-none',
          )}
          type="number"
          {...register('height', { required: true, min: 0, max: height, valueAsNumber: true })}
        />
        <input
          className={classNames(
            errors.weight
              ? 'border-red-600 focus:border-red-600'
              : 'focus:border-blue-400 border-gray-300',
            'w-full border-b border-solid py-2 px-2 text-neutral-500 outline-none',
          )}
          type="number"
          {...register('weight', { required: true, min: 0, max: weight, valueAsNumber: true })}
        />
        {errors.height ? (
          <p className="text-xs text-red-600">Height is { errors.height?.type === 'required' ? 'required' : 'too large' }.</p>
        ) : (
          <div></div>
        )}
        {errors.weight && (
          <p className="text-xs text-red-600">Weight is { errors.weight?.type === 'required' ? 'required' : 'too heavy' }.</p>
        )}
      </div>
      {isSubmitted && !isLoading && !product && Object.keys(errors).length === 0 && (
        <p className="px-3 text-sm text-red-600">
          We're sorry, we currently do not support shipping items this size.
        </p>
      )}
      {product && (
        <p className="px-3 text-base">
          Use "{`${product.type} - ${product.name}`}" to ship.
        </p>
      )}
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
