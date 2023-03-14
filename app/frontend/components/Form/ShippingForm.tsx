import { Button } from 'components/Button';
import { AppContext } from 'contexts/AppContext';
import { FC, useContext } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { InputField } from './InputField';

interface ShippingFormProps {
  isLoading: boolean;
  onSubmit: (data: any) => void;
  product: any;
  disableButton: boolean;
}

export const ShippingForm: FC<ShippingFormProps> = ({ onSubmit, product, disableButton, isLoading }) => {
  const { productsMaxDimensions: { weight, height, length, width }} = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitting },
  }: UseFormReturn = useForm();

  const inputOpts = { required: true, min: 0, valueAsNumber: true };
  const dimensions: any = {
    weight: 'heavy',
    height: 'tall',
    length: 'long',
    width: 'wide',
  };

  for (const [key, value] of Object.entries(errors)) {
    if (value) {
      value.message = value?.type === 'required' ? value?.type : `too ${dimensions[key]}`;
      value.message = `${key.charAt(0).toUpperCase() + key.slice(1)} is ${value?.message}`
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid sm:grid-cols-2 gap-y-10 gap-x-20 px-8 py-8">
        {Object.keys(dimensions).map((dimension) => {
          return (<InputField
            key={dimension}
            type='number'
            label={`${dimension.charAt(0).toUpperCase() + dimension.slice(1)}`}
            error={errors[dimension]}
            registration={register(dimension, { ...inputOpts, max: eval(dimension) })}
        />)
        })}
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
      <div className="mt-4 flex justify-end pr-3">
        <Button
          className='text-base font-semibold h-12 w-28'
          isLoading={disableButton}
          disabled={disableButton}
          type="submit"
        >
          Calculate
        </Button>
      </div>
    </form>
  );
};
