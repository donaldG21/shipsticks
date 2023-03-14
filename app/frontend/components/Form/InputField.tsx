import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password' | 'number';
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, className, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx(
          error ? 'border-red-600 focus:border-red-600' : 'focus:border-[#5fd063]',
          'w-full border-b border-solid border-gray-300 py-2 px-2 text-neutral-500 outline-none',
          className
        )}
          {...registration}
      />
    </FieldWrapper>
  );
};
