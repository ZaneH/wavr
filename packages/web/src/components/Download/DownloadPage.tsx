import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import {
  Col,
  Container,
  Content,
  Divider,
  FlexboxGrid,
  Grid,
  Header,
  Icon,
  IconButton,
  Panel,
  Row,
} from 'rsuite'
import { useOneTimeCodesQuery } from '../../generated/types'

interface DownloadParams {
  code: string
}

const DownloadPage = () => {
  const { code } = useParams<DownloadParams>()
  const { data: otcData } = useOneTimeCodesQuery({
    variables: {
      where: {
        code: { equals: code },
      },
    },
  })

  const pageExpired = otcData?.oneTimeCodes?.[0]?.expired === true ?? false

  return (
    <Container className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>Download Portal</title>
      </Helmet>
      <Header>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={16}>
            <h2>{pageExpired ? 'Expired' : 'Download'}</h2>
            <Divider />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Header>
      <Content>
        <Grid>
          <Row>
            <Col xs={12} xsOffset={6} md={8} mdOffset={8}>
              <Panel
                bordered
                header={pageExpired ? 'This link has expired' : 'Download file'}
              >
                {!pageExpired && (
                  <>
                    <p>
                      Clicking the download button will "expire" this link. New
                      links can be found in your Dashboard.
                    </p>
                    <br />
                    <a
                      href={
                        process.env.NODE_ENV === 'production'
                          ? `https://api.wavr.me:4000/download?code=${code}`
                          : `http://localhost:4000/download?code=${code}`
                      }
                    >
                      <IconButton
                        appearance="primary"
                        icon={<Icon icon="download" />}
                        block
                      >
                        Download
                      </IconButton>
                    </a>
                  </>
                )}
                {pageExpired && (
                  <p>
                    If this was a mistake, you can get a new download link
                    within the Dashboard.{' '}
                    <a
                      href="https://help.wavr.me/buyers/download-links"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Learn more
                    </a>
                  </p>
                )}
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  )
}

export default DownloadPage
