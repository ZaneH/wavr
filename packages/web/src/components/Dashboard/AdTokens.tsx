import { toFixedIfNeeded } from '@wavegrid/common/utils'
import React from 'react'
import { Container, Content, Divider, Header } from 'rsuite'
import { useAuthUser } from 'use-eazy-auth'
import BuyTokens from './BuyTokens'

const AdTokens = () => {
  const { user } = useAuthUser()

  return (
    <Container>
      <Header>
        <h2>You have {toFixedIfNeeded(user?.adTokens ?? 0, 3)} Ad Tokens</h2>
        <p>
          Ad Tokens are used to promote your products{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://help.wavr.me/sellers/ad-tokens"
          >
            Learn more
          </a>
        </p>
        <Divider />
      </Header>
      <Content>
        <BuyTokens />
      </Content>
    </Container>
  )
}

export default AdTokens
