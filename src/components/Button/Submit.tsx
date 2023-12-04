import './_button.scss'

import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent) => void;
  isLoading?: boolean;
  color?: string;
  outline?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Submit: React.FC<ButtonProps> = ({
  label = 'Submit',
  onClick = () => {},
  isLoading = false,
  outline = false,
  className = '',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const buttonClass = `button ${outline ? 'button--outline' : ''} ${className}`
  return (

    <button
      className={buttonClass}
      onClick={onClick}
      {...props}
      disabled={isLoading}
      type="submit"
      aria-label={label}
    >
      {icon && iconPosition === 'left' && (
        <span className="button-icon">{icon}</span>
      )}
      {isLoading ? 'Chargement...' : label}
      {icon && iconPosition === 'right' && (
        <span className="button-icon right">{icon}</span>
      )}
    </button>
  )
}
export default Submit
