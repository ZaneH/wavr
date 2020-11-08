import React from 'react'
import { Container, Content, Divider, Header } from 'rsuite'
import WithdrawTable from './WithdrawTable'

const PendingWithdraws = () => {
  return (
    <Container>
      <Header>
        <h2>Pending Withdraws</h2>
        <p>
          See your pending withdraw requests. These are reset when a successful
          withdraw is made.
        </p>
        <Divider />
      </Header>
      <Content>
        <WithdrawTable />
      </Content>
    </Container>
  )
}

export default PendingWithdraws
