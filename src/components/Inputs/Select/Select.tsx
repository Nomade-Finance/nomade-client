import Select, {
  CSSObjectWithLabel,
  FormatOptionLabelMeta,
  GroupBase,
  OptionProps,
  StylesConfig
} from 'react-select'

import React from 'react'
import makeAnimated from 'react-select/animated'

interface NomadeSelectProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (selectedOption: string) => void;
  formatOptionLabel?: (
    data: unknown,
    formatOptionLabelMeta: FormatOptionLabelMeta<unknown>
  ) => React.ReactNode;
  placeholder?: string;
}

const NomadeSelect: React.FC<NomadeSelectProps> = ({
  options,
  onChange,
  value,
  formatOptionLabel,
  placeholder
}) => {
  const animatedComponents = makeAnimated()

  const customStyles: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
    control: (provided: CSSObjectWithLabel) => ({
      ...provided,
      outline: 'none',
      boxShadow: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: '1px solid var(--nomade-border)',
      borderRadius: '5px',
      height: '3em',
      width: 'auto',
      margin: '0',
      '&:hover': {
        borderColor: 'var(--nomade-primary)'
      }
    }),
    singleValue: (provided: CSSObjectWithLabel) => ({
      ...provided,
      color: 'var(--nomade-primary)',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5em'
    }),
    option: (
      provided: CSSObjectWithLabel,
      state: OptionProps<unknown, boolean, GroupBase<unknown>>
    ) => ({
      ...provided,
      color: state.isSelected
        ? 'var(--nomade-conversion-text)'
        : 'var(--nomade-primary)',
      backgroundColor: state.isSelected ? 'var(--nomade-isSelected)' : 'none',
      cursor: 'pointer',
      padding: '1em',
      outline: 'none',
      fontSize: '0.9em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0.5em 0',
      border: 'solid 1px  var(--nomade-border)',
      borderRadius: '5px',
      gap: '0.5em',
      ':hover': {
        backgroundColor: 'var(--nomade-conversion-hover)',
        color: 'var(--nomade-conversion-hover-text)'
      },
      '::placeholder': {
        color: 'var(--nomade-primary)',
        fontWeight: 'bold'
      }
    }),

    menu: (provided: CSSObjectWithLabel) => ({
      ...provided,
      backgroundColor: 'var(--nomade-background)',
      border: 'solid 1px  var(--nomade-border)',
      borderRadius: '5px',
      marginTop: '2px',
      padding: '0.3em'
    })
  }

  const handleChange = (newValue: unknown) => {
    if (
      newValue &&
      typeof newValue === 'object' &&
      'value' in newValue &&
      onChange
    ) {
      onChange((newValue as { value: string; label: string }).value)
    }
  }

  return (
    <Select
      className="select"
      placeholder={placeholder}
      closeMenuOnSelect={true}
      components={animatedComponents}
      options={options}
      isSearchable={false}
      styles={customStyles}
      onChange={handleChange}
      value={options.find((option) => option.value === value)}
      formatOptionLabel={formatOptionLabel}
    />
  )
}

export default NomadeSelect
