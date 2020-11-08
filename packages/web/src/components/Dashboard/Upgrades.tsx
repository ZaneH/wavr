import { Strings } from '@wavegrid/common/constants'
import React from 'react'
import { Container, Content, Divider, Header } from 'rsuite'

const Upgrades = () => {
  return (
    <Container>
      <Header>
        <h2>Upgrade</h2>
        <p>
          Increase your reach and get more out of {`${Strings.brand_name}`}{' '}
          <a
            href="https://help.wavr.me/sellers/pricing#account-upgrades"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </p>
        <Divider />
      </Header>
      <Content>
        <p>Coming soon</p>
      </Content>
    </Container>
  )
}

export default Upgrades
