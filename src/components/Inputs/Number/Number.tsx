import './_number.scss'

import React from 'react'

interface NomadeNumberInputProps {
  value?: number;
  onChange?: (value: number) => void;
  placeholder?: string;
  onInputError?: (error: string | null) => void; // Add this line
}

const NomadeNumberInput: React.FC<NomadeNumberInputProps> = ({
  value,
  onChange,
  placeholder,
  onInputError
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    if (newValue < 0) {
      if (onInputError) onInputError('Le montant doit être positif')
      return
    } else {
      if (onInputError) onInputError(null)
    }

    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <div>
    <input
      type="number"
      step="0.0005"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="nomade-number-input"
      onWheel={(e) => e.preventDefault()}
      min="0"
    />
  </div>
  )
}

export default NomadeNumberInput
