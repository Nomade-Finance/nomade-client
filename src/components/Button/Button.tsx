"use client"

import './_button.scss'

import Link from 'next/link'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent) => void;
  isLoading?: boolean;
  color?: string;
  outline?: boolean;
  icon?: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  label = 'Submit',
  type,
  onClick = () => {},
  isLoading = false,
  outline = false,
  className = '',
  icon,
  href,
  iconPosition = 'left',
  ...props
}) => {
  const buttonClass = `button ${outline ? 'button--outline' : ''} ${className}`
  return (
   <Link href={href || '#'}>
    <button
      className={buttonClass}
      onClick={onClick}
      {...props}
      disabled={isLoading}
      type={type}
      aria-label={label}
    >
      {icon && iconPosition === 'left' && (
        <span className="button-icon">{icon}</span>
      )}
      {isLoading ? 'Loading...' : label}
      {icon && iconPosition === 'right' && (
        <span className="button-icon right">{icon}</span>
      )}
    </button>
   </Link>
  )
}
export default Button
