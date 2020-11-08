import React from 'react'
import { Dropdown, Icon, Nav, Sidebar, Sidenav } from 'rsuite'

interface Props {
  index: Number
  setIndex: Function
}

export const EnumDashSidebar = {
  Dashboard: 0,
  MyPacks: 1,
  MySales: 2,
  ConnectedAccounts: 3,
  Promotion: 4,
  AdTokens: 5,
  MyPromoCodes: 6,
  Payments: 7,
  Upgrade: 8,
  Withdraws: 9,
  RevenueSplit: 10,
  Purchases: 11,
  Owned: 12,
  Activity: 13,
  MyReviews: 14,
  Favorites: 15,
}

const DashSidebar = ({ index, setIndex }: Props) => {
  return (
    <Sidebar>
      <Sidenav
        onSelect={(e) => setIndex(Number(e))}
        defaultOpenKeys={[
          `${EnumDashSidebar.Dashboard}`,
          `${EnumDashSidebar.Promotion}`,
          `${EnumDashSidebar.Payments}`,
          `${EnumDashSidebar.Purchases}`,
          `${EnumDashSidebar.Activity}`,
        ]}
      >
        <Sidenav.Body>
          <Nav>
            <Dropdown
              title="Dashboard"
              icon={<Icon icon="dashboard" />}
              eventKey={`${EnumDashSidebar.Dashboard}`}
            >
              <Dropdown.Item
                active={index === EnumDashSidebar.MyPacks}
                eventKey={`${EnumDashSidebar.MyPacks}`}
              >
                My Packs
              </Dropdown.Item>
              <Dropdown.Item
                active={index === EnumDashSidebar.MySales}
                eventKey={`${EnumDashSidebar.MySales}`}
              >
                My Sales
              </Dropdown.Item>
              <Dropdown.Item
                active={index === EnumDashSidebar.ConnectedAccounts}
                eventKey={`${EnumDashSidebar.ConnectedAccounts}`}
              >
                Connected Accounts
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              title="Promotion"
              icon={<Icon icon="bullhorn" />}
              eventKey={`${EnumDashSidebar.Promotion}`}
            >
              <Dropdown.Item
                active={index === EnumDashSidebar.AdTokens}
                eventKey={`${EnumDashSidebar.AdTokens}`}
              >
                My Ad Tokens
              </Dropdown.Item>
              <Dropdown.Item
                active={index === EnumDashSidebar.MyPromoCodes}
                eventKey={`${EnumDashSidebar.MyPromoCodes}`}
              >
                My Promo Codes
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              title="Payments"
              icon={<Icon icon="credit-card" />}
              eventKey={`${EnumDashSidebar.Payments}`}
            >
              <Dropdown.Item
                active={index === EnumDashSidebar.Upgrade}
                eventKey={`${EnumDashSidebar.Upgrade}`}
              >
                Upgrade
              </Dropdown.Item>
              <Dropdown.Item
                active={index === EnumDashSidebar.Withdraws}
                eventKey={`${EnumDashSidebar.Withdraws}`}
              >
                Pending Withdraws
              </Dropdown.Item>
              <Dropdown.Item
                active={index === EnumDashSidebar.RevenueSplit}
                eventKey={`${EnumDashSidebar.RevenueSplit}`}
                disabled
              >
                Revenue Split
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              title="Purchases"
              icon={<Icon icon="list" />}
              eventKey={`${EnumDashSidebar.Purchases}`}
            >
              <Dropdown.Item
                active={index === EnumDashSidebar.Owned}
                eventKey={`${EnumDashSidebar.Owned}`}
              >
                Owned
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              title="Activity"
              icon={<Icon icon="comment" />}
              eventKey={`${EnumDashSidebar.Activity}`}
            >
              <Dropdown.Item
                active={index === EnumDashSidebar.MyReviews}
                eventKey={`${EnumDashSidebar.MyReviews}`}
              >
                My Reviews
              </Dropdown.Item>
              <Dropdown.Item
                active={index === EnumDashSidebar.Favorites}
                eventKey={`${EnumDashSidebar.Favorites}`}
              >
                Favorites
              </Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  )
}

export default DashSidebar
