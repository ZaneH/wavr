import React from 'react'
import { Col, Container, Content, Divider, Grid, Header, Row } from 'rsuite'
import { useAuthUser } from 'use-eazy-auth'
import { useUserBalanceQuery } from '../../generated/types'
import BalancePanel from './BalancePanel'
import SalesTable from './SalesTable'

const MySales = () => {
  const { user } = useAuthUser()
  const { data: userBalanceData } = useUserBalanceQuery({
    variables: {
      where: {
        username: user.username,
      },
    },
  })

  return (
    <Container>
      <Header>
        <Grid fluid>
          <Row>
            <Col xs={18}>
              <h2>My Sales</h2>
              <p>
                View products that you've sold{' '}
                <a
                  href="https://help.wavr.me/sellers/withdraw-profits"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </p>
            </Col>
            <Col xs={6} className="balance-container">
              <BalancePanel
                paidBalance={userBalanceData?.user?.paidBalance}
                unpaidBalance={userBalanceData?.user?.unpaidBalance}
              />
            </Col>
          </Row>
        </Grid>
        <Divider />
      </Header>
      <Content>
        <SalesTable />
      </Content>
    </Container>
  )
}

export default MySales
