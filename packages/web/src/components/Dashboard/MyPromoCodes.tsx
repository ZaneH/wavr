import React from 'react'
import { Container, Header, Content, Divider } from 'rsuite'
import PromoCodeMaker from './PromoCodeMaker'
import PromoCodesTable from './PromoCodesTable'

const MyPromoCodes = () => {
  return (
    <Container>
      <Header>
        <h2>My Promo Codes</h2>
        <p>
          Generate and manage promo codes{' '}
          <a
            href="https://help.wavr.me/sellers/promo-codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </p>
        <Divider />
      </Header>
      <Container>
        <Header>
          <PromoCodeMaker />
        </Header>
        <Content>
          <PromoCodesTable />
        </Content>
      </Container>
    </Container>
  )
}

export default MyPromoCodes
