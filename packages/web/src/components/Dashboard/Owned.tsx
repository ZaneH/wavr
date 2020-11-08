import React, { useState } from 'react'
import {
  Alert,
  Button,
  Container,
  Content,
  ControlLabel,
  Divider,
  Form,
  FormControl,
  FormGroup,
  Header,
  HelpBlock,
} from 'rsuite'
import { useAuthUser } from 'use-eazy-auth'
import {
  SortOrder,
  useRedeemKeyMutation,
  useTransactionsQuery,
} from '../../generated/types'
import OwnedTable from './OwnedTable'

const Owned = () => {
  const { user } = useAuthUser()
  const [licenseKey, setLicenseKey] = useState('')
  const [redeemLicense] = useRedeemKeyMutation()

  const { data: transactionsData, loading, refetch } = useTransactionsQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: [
        {
          createdAt: SortOrder.Desc,
        },
      ],
      where: {
        buyer: {
          id: {
            equals: user?.id,
          },
        },
      },
    },
  })

  return (
    <Container>
      <Header>
        <h2>Owned</h2>
        <p>View products you have purchased or redeemed with a license key</p>
      </Header>
      <Content className="less-top-space">
        <Form fluid layout="inline">
          <FormGroup>
            <ControlLabel>License Key</ControlLabel>
            <FormControl
              value={licenseKey}
              onChange={(e) => setLicenseKey(e)}
              name="licenseKey"
            />
            <HelpBlock tooltip>
              If you purchase a pack without an account, you can add it to your
              account here.
            </HelpBlock>
          </FormGroup>

          <Button
            onClick={() => {
              redeemLicense({
                variables: {
                  key: licenseKey,
                },
              })
                .then((transaction) => {
                  if (transaction.errors) {
                    return Alert.error(transaction.errors[0].message)
                  }

                  refetch()
                  setLicenseKey('')
                  Alert.success(
                    'Successfully added the transaction to your account!'
                  )
                })
                .catch((err) => {
                  Alert.error(err)
                })
            }}
          >
            Submit
          </Button>
        </Form>
        <Divider />
        <OwnedTable
          transactions={transactionsData?.transactions ?? []}
          loading={loading}
        />
      </Content>
    </Container>
  )
}

export default Owned
