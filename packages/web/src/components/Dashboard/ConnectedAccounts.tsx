import React from 'react'
import {
  Badge,
  Button,
  Col,
  Container,
  Content,
  Divider,
  Grid,
  Header,
  Panel,
  Row,
} from 'rsuite'
import { useGetDiscordOauthUrlQuery } from '../../generated/types'
import { useAuthUser } from 'use-eazy-auth'

const ConnectedAccounts = () => {
  const {
    data: discordOauth,
    loading: discordLoading,
  } = useGetDiscordOauthUrlQuery()

  const { user } = useAuthUser()

  return (
    <Container>
      <Header>
        <h2>Connected Accounts</h2>
        <p>Get rewards and extra features</p>
        <Divider />
      </Header>
      <Content>
        <Grid fluid>
          <Row>
            <Col xs={24} md={8}>
              <Panel bordered shaded>
                <h3>Discord</h3>
                <p>
                  Connect your Discord to earn Ad Tokens{' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://help.wavr.me/sellers/ad-tokens#free-ad-tokens"
                  >
                    Learn more
                  </a>
                </p>
                <div className="less-top-space">
                  <a
                    target="_blank"
                    href={`${discordOauth?.getDiscordOauthUrl}`}
                    rel="noopener noreferrer"
                  >
                    <Badge
                      className="green-badge"
                      content={Boolean(user?.discordId)}
                    >
                      <Button
                        disabled={discordLoading}
                        loading={discordLoading}
                        appearance="primary"
                        color="blue"
                      >
                        {Boolean(user?.discordId)
                          ? 'Reconnect Discord'
                          : 'Connect Discord'}
                      </Button>
                    </Badge>
                  </a>
                </div>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  )
}

export default ConnectedAccounts
