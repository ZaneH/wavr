import React, { useState } from 'react'
import {
  Alert,
  Button,
  Checkbox,
  ControlLabel,
  DatePicker,
  Divider,
  Form,
  FormControl,
  FormGroup,
  HelpBlock,
  InputNumber,
  Panel,
  Radio,
  RadioGroup,
} from 'rsuite'
import { useCreatePromoCodeMutation } from '../../generated/types'
import { randomString } from '../../utils/RandomString'
import ProductPicker from './ProductPicker'

interface ICodeForm {
  code: string
  uses: number
  percentOff: number
}

const PromoCodeMaker = () => {
  const [createPromoCode] = useCreatePromoCodeMutation({
    refetchQueries: ['PromoCodes'],
  })
  const [formExpiresAt, setFormExpiresAt] = useState<Date>()
  const [affectsAll, setAffectsAll] = useState<boolean>(false)
  const [affectedProduct, setAffectedProduct] = useState<string>()

  const randomCode = () => {
    return randomString(
      10,
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    )
  }

  const [codeForm, setCodeForm] = useState<Partial<ICodeForm>>({
    code: randomCode(),
  })

  const [radios, setRadios] = useState<Record<string, string>>()

  const handleGroupChange = (name, value) => {
    setRadios({
      ...radios,
      [name]: value,
    })
  }

  const regenerateCode = () => {
    setCodeForm({
      ...codeForm,
      code: randomCode(),
    })
  }

  return (
    <Panel
      bordered
      collapsible
      header="Promo Code Maker"
      defaultExpanded={true}
    >
      <Form fluid layout="inline" formValue={codeForm}>
        <h5>Availability</h5>
        <RadioGroup
          onChange={(value) => handleGroupChange('availability', value)}
          inline
        >
          <Radio value="expiring">Time Limited</Radio>
          <Radio value="limited">Use Limited</Radio>
          <Radio value="unlimited">Unlimited</Radio>
        </RadioGroup>
        {radios?.availability === 'expiring' && (
          // Expiring On DatePicker
          <>
            <br />
            <FormGroup>
              <p style={{ marginBottom: '6px' }}>Expires On</p>
              <DatePicker
                value={formExpiresAt}
                onChange={(value) => {
                  setFormExpiresAt(value)
                }}
              />
            </FormGroup>
          </>
        )}
        {radios?.availability === 'limited' && (
          // Limited
          <>
            <br />
            <FormGroup>
              <p style={{ marginBottom: '6px' }}>Limited</p>
              <InputNumber
                min={0}
                max={2147483647}
                onChange={(value) => {
                  setCodeForm({
                    ...codeForm,
                    uses: Number(value),
                  })
                }}
              />
            </FormGroup>
          </>
        )}
        <h5>Effect</h5>
        <RadioGroup
          inline
          onChange={(value) => handleGroupChange('effect', value)}
        >
          <Radio value="free">Free</Radio>
          <Radio value="percentage">Percentage Off</Radio>
        </RadioGroup>
        {radios?.effect === 'percentage' && (
          // Percentage Off
          <>
            <br />
            <FormGroup>
              <p style={{ marginBottom: '6px' }}>Percentage</p>
              <InputNumber
                onChange={(value) => {
                  setCodeForm({
                    ...codeForm,
                    percentOff: Number(value),
                  })
                }}
                min={1}
                max={100}
                postfix={'%'}
              />
            </FormGroup>
          </>
        )}
        <h5>Affects</h5>
        <FormGroup>
          <p style={{ marginBottom: '6px' }}></p>
          <Checkbox onChange={(value, checked) => setAffectsAll(checked)}>
            Affects all of your products
            <HelpBlock tooltip style={{ marginTop: '0' }}>
              <em>Note:</em> The promo code will affect all of your products in
              the buyer's cart at checkout. If they have 6 of your products in
              the cart, the promo code will be used 6 times.
            </HelpBlock>
          </Checkbox>
          <ProductPicker
            onChange={(value) => {
              setAffectedProduct(value)
            }}
            disabled={affectsAll}
          />
        </FormGroup>
        <Divider />
        <FormGroup>
          <ControlLabel>Code</ControlLabel>
          <FormControl
            onChange={(value) => {
              setCodeForm({
                ...codeForm,
                code: value,
              })
            }}
            name="code"
          />
        </FormGroup>
        <FormGroup>
          <Button appearance="default" onClick={regenerateCode}>
            Regenerate
          </Button>
        </FormGroup>
        <FormGroup>
          <Button
            appearance="primary"
            onClick={() => {
              if (!radios?.availability) {
                return Alert.error("Please choose an option for 'Availability'")
              }

              if (radios?.availability === 'expiring' && !formExpiresAt) {
                return Alert.error('Please choose an expiration date')
              }

              if (radios.availability === 'limited' && !codeForm?.uses) {
                return Alert.error(
                  'Please enter the max amount of times this code can be used'
                )
              }

              if (!radios?.effect) {
                return Alert.error("Please choose an option for 'Effect'")
              }

              if (radios?.effect === 'percentage' && !codeForm?.percentOff) {
                return Alert.error('Please enter the percent discount')
              }

              if (!affectsAll && !affectedProduct) {
                return Alert.error('Please choose the affected product')
              }

              if ((codeForm?.code?.trim()?.length ?? 0) < 4) {
                return Alert.error(
                  'Your promo code must be at least 4 characters'
                )
              }

              createPromoCode({
                variables: {
                  data: {
                    ...(radios?.availability === 'expiring'
                      ? { expiresAt: formExpiresAt }
                      : []),
                    ...(radios?.availability === 'limited'
                      ? { useLimit: codeForm?.uses }
                      : []),
                    ...(affectsAll === false
                      ? {
                          product: {
                            connect: {
                              id: affectedProduct,
                            },
                          },
                        }
                      : []),
                    ...(radios?.effect === 'percentage'
                      ? { percentOff: codeForm.percentOff! }
                      : { percentOff: 100 }),
                    code: codeForm!.code!,
                    affectsAll,
                  },
                },
              })
                .then((result) => {
                  if (!result?.data) {
                    throw new Error()
                  }

                  Alert.success('Created promo code')
                  regenerateCode()
                })
                .catch((err) => {
                  Alert.error(
                    'There was an issue creating your code. It may be because someone else already uses this code.',
                    8000
                  )
                })
            }}
          >
            Create
          </Button>
        </FormGroup>
      </Form>
    </Panel>
  )
}

export default PromoCodeMaker
