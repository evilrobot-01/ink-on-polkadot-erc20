import { ClassNameable } from '..';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import React from 'react';

type Props = ClassNameable & {
  onChange: (v: number) => void;
  value: number;
  placeholder?: string;
  disabled?: boolean;
  max: number;
  min?: number;
};

const COMMON_CLASSES = [
  'bg-brand-500 disabled:bg-brand-450 text-white border-none focuse:outline-none focus-visible:outline-none',
  'focus:outline-none disabled:text-white/80 py-2 flex items-center justify-center disabled:cursor-not-allowed',
].join(' ');

const BUTTON_CLASSES = 'hover:bg-brand-900/50';

export const NumberInput: React.FC<Props> = ({
  value,
  disabled,
  onChange,
  placeholder,
  max,
  min = 0,
  className,
}) => {
  const handleChange = (v: number) => {
    const val = v || min;
    if (val < min) return;
    if (val > max) return;
    onChange(val);
  };

  return (
    <span
      className={classNames(
        'w-full flex items-stretch justify-between rounded-full',
        className,
      )}
    >
      <button
        type='button'
        disabled={value <= min || disabled}
        onClick={() => handleChange(value - 1)}
        className={classNames(
          COMMON_CLASSES,
          BUTTON_CLASSES,
          'rounded-l-full min-w-min pl-4 pr-2',
        )}
      >
        <MinusIcon className='h-5 w-5 text-white' />
      </button>
      <input
        className={classNames(
          COMMON_CLASSES,
          'text-center grow focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed',
        )}
        type='text'
        inputMode='numeric'
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={(e) => {
          handleChange(parseInt(e.target.value) || 0);
        }}
      />
      <button
        type='button'
        disabled={value >= max || disabled}
        onClick={() => handleChange(value + 1)}
        className={classNames(
          COMMON_CLASSES,
          BUTTON_CLASSES,
          'rounded-r-full pr-4 pl-2',
        )}
      >
        <PlusIcon className='h-5 w-5 text-white' />
      </button>
    </span>
  );
};
