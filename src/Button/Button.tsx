import React, { FC, ReactNode } from 'react';
import './Button.css';

export type TButtonProps = {
  onClick(): void;
  children: ReactNode;
  variant?: 'primary' | 'success';
  isDisabled?: boolean;
};

const Button: FC<TButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  isDisabled = false,
}) => {
  const cn = `button button_${variant}`;
  return (
    <button className={cn} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
