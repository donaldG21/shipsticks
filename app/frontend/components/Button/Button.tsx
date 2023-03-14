import clsx from 'clsx';
import { Spinner } from 'components/Spinner';
import { ButtonHTMLAttributes, FC } from 'react';

const variants = {
  primary: 'bg-[#5fd063] text-white hover:bg-[#4fab55] disabled:hover:bg-[#5fd063] shadow-button-inset',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-2 px-4 text-sm font-light',
  md: 'py-3 px-6 text-md font-medium',
  lg: 'py-3 px-8 text-lg font-bold',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({ className='', type = 'button', variant = 'primary', size = 'md', isLoading = false, ...props }) => {
  return (
    <button
      type={type}
      className={clsx(
        'flex justify-center items-center rounded outline-none focus:outline-none disabled:opacity-70 disabled:cursor-default',
        variants[variant],
        sizes[size],
        className
        )}
      {...props}
      >
        {isLoading && <Spinner variant='light' />}
        {!isLoading && <span>{props.children}</span>}
    </button>
  )
}
