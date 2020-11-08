import React from 'react'
import { Alert, Button, FlexboxGrid, Panel, Tooltip, Whisper } from 'rsuite'
import { useRequestWithdrawMutation } from '../../generated/types'
import { useAuthUser } from 'use-eazy-auth'

interface Props {
  unpaidBalance?: number
  paidBalance?: number
}

const BalancePanel = ({ unpaidBalance, paidBalance }: Props) => {
  const [requestWithdraw, requestWithdrawResult] = useRequestWithdrawMutation()
  const { user } = useAuthUser()

  return (
    <Panel bordered shaded>
      <FlexboxGrid justify="space-between">
        <FlexboxGrid.Item>
          <h6>Unpaid: </h6>
          <p>${unpaidBalance?.toFixed(2) ?? '--'}</p>
          <br />
          <h6>Paid: </h6>
          <p>${paidBalance?.toFixed(2) ?? '--'}</p>
        </FlexboxGrid.Item>
        <FlexboxGrid style={{ alignSelf: 'center' }}>
          <Whisper
            placement="bottom"
            trigger={(unpaidBalance ?? 0) < 5 ? 'hover' : 'none'}
            speaker={
              <Tooltip>
                You need a minimum unpaid balance of $5.00 to withdraw
              </Tooltip>
            }
          >
            <Button
              loading={
                requestWithdrawResult.called && requestWithdrawResult.loading
              }
              disabled={
                (requestWithdrawResult.called &&
                  requestWithdrawResult.loading) ||
                (unpaidBalance ?? 0) < 5
              }
              size="md"
              color="green"
              onClick={() => {
                requestWithdraw({
                  variables: {
                    id: user?.id,
                  },
                })

                Alert.success(
                  'Started a withdraw request. Check your email!',
                  4000
                )
              }}
            >
              Withdraw
            </Button>
          </Whisper>
        </FlexboxGrid>
      </FlexboxGrid>
    </Panel>
  )
}

export default BalancePanel
