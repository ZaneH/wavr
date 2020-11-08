import { routes } from '@wavegrid/common/constants'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Content } from 'rsuite'
import { useAuthUser } from 'use-eazy-auth'
import { useGo } from '../../hooks/useGo'
import DashSidebar, { EnumDashSidebar } from './DashSidebar'
import MyPacks from './MyPacks'
import Owned from './Owned'
import Sales from './MySales'
import MyReviews from './MyReviews'
import MyPromoCodes from './MyPromoCodes'
import AdTokens from './AdTokens'
import { Helmet } from 'react-helmet'
import Upgrades from './Upgrades'
import PendingWithdraws from './PendingWithdraws'
import ConnectedAccounts from './ConnectedAccounts'
import Favorites from './Favorites'

const space = {
  margin: '32px',
}

interface ParamProps {
  tabId: string
}

const DashboardPage = () => {
  const { tabId } = useParams<ParamProps>()
  const { go } = useGo()
  const { user } = useAuthUser()

  const renderSubpage = (i: Number) => {
    switch (i) {
      case EnumDashSidebar.MyPacks: {
        return <MyPacks />
      }
      //   case 2: {
      //     return <MyServices />
      //   }
      case EnumDashSidebar.MySales: {
        return <Sales />
      }
      case EnumDashSidebar.Owned: {
        return <Owned />
      }
      case EnumDashSidebar.MyReviews: {
        return <MyReviews />
      }
      case EnumDashSidebar.MyPromoCodes: {
        return <MyPromoCodes />
      }
      case EnumDashSidebar.AdTokens: {
        return <AdTokens />
      }
      case EnumDashSidebar.Upgrade: {
        return <Upgrades />
      }
      case EnumDashSidebar.Withdraws: {
        return <PendingWithdraws />
      }
      case EnumDashSidebar.ConnectedAccounts: {
        return <ConnectedAccounts />
      }
      case EnumDashSidebar.Favorites: {
        return <Favorites />
      }
      default: {
        console.log('No page configured for ', i)
        return null
      }
    }
  }

  return (
    <Container>
      <Helmet titleTemplate="Wavr / %s">
        <title>Dashboard</title>
      </Helmet>
      <DashSidebar
        index={Number(tabId)}
        setIndex={(i) => {
          go.push(routes.dashboard, {
            username: user?.username,
            tabId: i,
          })
        }}
      />
      <Content style={space}>{renderSubpage(Number(tabId))}</Content>
    </Container>
  )
}

export default DashboardPage
