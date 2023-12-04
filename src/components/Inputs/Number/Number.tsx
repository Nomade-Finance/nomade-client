import './_number.scss'

import { NomadeNumberInputProps } from '@/lib/interfaces/interfaces'
import React from 'react'

const NomadeNumberInput: React.FC<NomadeNumberInputProps> = ({
  value,
  onChange,
  placeholder,
  onInputError
}) => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValueStr = event.target.value;

    // Ignore input that has more than 5 digits
    if (newValueStr.replace(/[^0-9]/g, '').length > 5) {
      setIsInvalid(true);
      return;
    } else {
      setIsInvalid(false);
    }

    const newValue = Number(newValueStr);

    if (newValue < 0) {
      if (onInputError) onInputError('Le montant doit être positif');
      return;
    } else {
      if (onInputError) onInputError(null);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div>
    <input
      type="number"
      step="0.0005"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`nomade-number-input ${isInvalid ? 'invalid' : ''}`}
      onWheel={(e) => e.preventDefault()}
      min="0"
      inputMode='numeric'
    />
  </div>
  )
}

export default NomadeNumberInput
