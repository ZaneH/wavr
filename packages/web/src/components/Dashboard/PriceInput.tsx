import React from 'react'
import { Input } from 'rsuite'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const maskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false,
}

interface Props {
  onChange: Function
  defaultValue?: string
}

const PriceInput = (props: Props) => {
  const currencyMask = createNumberMask(maskOptions)

  return (
    <MaskedInput
      mask={currencyMask}
      onChange={(e) => props.onChange(e)}
      defaultValue={props.defaultValue ?? 0}
      render={(textMaskRef, rProps) => (
        <Input
          inputRef={textMaskRef}
          {...rProps}
          style={{
            textAlign: 'right',
          }}
        />
      )}
    />
  )
}

export default PriceInput
