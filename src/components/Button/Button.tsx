import React, { FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './Button.module.css';

export type TButtonProps = {
  onClick(): void;
  children: ReactNode;
  variant?: 'primary' | 'success' | 'warning';
  isDisabled?: boolean;
};

const Button: FC<TButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  isDisabled = false,
}) => {
  return (
    <button
      className={clsx({
        [styles.button]: true,
        [styles.button_primary]: variant === 'primary',
        [styles.button_success]: variant === 'success',
        [styles.button_warning]: variant === 'warning',
      })}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
