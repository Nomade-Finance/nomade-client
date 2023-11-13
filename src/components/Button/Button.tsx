import React from 'react'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick?: () => void;
  isLoading?: boolean;
  color?: string;
  outline?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
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
    >
      {icon && iconPosition === 'left' && (
        <span className="button-icon">{icon}</span>
      )}
      {isLoading ? 'Loading...' : label}
      {icon && iconPosition === 'right' && (
        <span className="button-icon right">{icon}</span>
      )}
    </button>
  )
}
export default Button
