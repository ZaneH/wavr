import { routes } from '@wavegrid/common/constants'
import React from 'react'
import { Button } from 'rsuite'
import { useGo } from '../../hooks/useGo'
import { useAuthUser } from 'use-eazy-auth'
import { EnumDashSidebar } from '../Dashboard/DashSidebar'
import { toFixedIfNeeded } from '@wavegrid/common/utils'

interface Props {
  adTokens: number
}

const AdTokenButton = ({ adTokens }: Props) => {
  const { user } = useAuthUser()
  const { go } = useGo()

  return (
    <div style={{ display: 'inline' }} className="token-button-container">
      <div
        style={{
          display: 'inline-block',
          top: '10px',
          position: 'relative',
        }}
      >
        <Button
          className="token-button"
          appearance="primary"
          onClick={() => {
            go.push(routes.dashboard, {
              username: user!.username,
              tabId: EnumDashSidebar.AdTokens,
            })
          }}
        >
          <span style={{ fontWeight: 600 }}>
            {toFixedIfNeeded(adTokens, 2)} Tokens
          </span>
        </Button>
      </div>
    </div>
  )
}

export default AdTokenButton
