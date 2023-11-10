import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    onClick?: () => void;
    isLoading?: boolean;
    color?: string;
    outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label = 'Submit', onClick = () => {}, isLoading = false, outline = false, ...props }) => {
  const buttonClass = `button ${outline ? 'button--outline' : ''}`
  return (
        <button
            className={buttonClass}
            onClick={onClick}
            {...props}
            disabled={isLoading}
        >
            {isLoading ? 'Loading...' : label}
        </button>
  )
}

export default Button
