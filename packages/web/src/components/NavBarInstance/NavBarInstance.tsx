import { routes } from '@wavegrid/common/constants'
import React from 'react'
import { Link } from 'react-router-dom'
import { Affix, Dropdown, Icon, Nav, Navbar } from 'rsuite'
import { useCart } from 'use-cart'
import { useAuthActions, useAuthState, useAuthUser } from 'use-eazy-auth'
import { useGo } from '../../hooks/useGo'
import AdTokenButton from './AdTokenButton'

const navLogo = {
  padding: '15px 0',
  paddingLeft: '30px',
  paddingRight: '15px',
  display: 'inline-block',
  cursor: 'pointer',
}

export const NavBarInstance = ({ ...props }) => {
  const { authenticated } = useAuthState()
  const { user } = useAuthUser()
  const { logout } = useAuthActions()
  const { go } = useGo()
  const { itemsCount } = useCart()

  const shouldShowAccount = authenticated
  const shouldShowCart = itemsCount > 0
  const shouldShowAdTokens = user?.adTokens > 0

  return (
    <Affix>
      <Navbar {...props}>
        <Navbar.Header>
          <div style={navLogo} onClick={() => go.push(routes.home)}>
            <img src="/img/w.png" alt="Logo" height="26px" />
          </div>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Link to={routes.home}>
              <Nav.Item>Home</Nav.Item>
            </Link>
            <Link to={routes.browse}>
              <Nav.Item>Browse</Nav.Item>
            </Link>
            {shouldShowAdTokens && <AdTokenButton adTokens={user?.adTokens} />}
          </Nav>
          <Nav pullRight>
            <Dropdown trigger={['click', 'hover']} title="Account">
              {!shouldShowAccount && (
                <div
                  onClick={() => {
                    go.push(routes.login)
                  }}
                >
                  <Dropdown.Item>Login</Dropdown.Item>
                </div>
              )}
              {!shouldShowAccount && (
                <div
                  onClick={() => {
                    go.push(routes.signup)
                  }}
                >
                  <Dropdown.Item>Sign Up</Dropdown.Item>
                </div>
              )}
              {shouldShowAccount && (
                <div
                  onClick={() => {
                    go.push(routes.user, { username: user?.username })
                  }}
                >
                  <Dropdown.Item>My Store</Dropdown.Item>
                </div>
              )}
              {shouldShowAccount && (
                <div
                  onClick={() => {
                    go.push(routes.dashboard, {
                      username: user?.username,
                      tabId: 1,
                    })
                  }}
                >
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </div>
              )}
              {shouldShowAccount && <Dropdown.Item divider />}
              {shouldShowAccount && (
                <div
                  onClick={() => {
                    go.push(routes.settings)
                  }}
                >
                  <Dropdown.Item>Settings</Dropdown.Item>
                </div>
              )}
              {shouldShowAccount && <Dropdown.Item divider />}
              {shouldShowAccount && (
                <div
                  onClick={() => {
                    logout()
                    window.location.reload()
                  }}
                >
                  <Dropdown.Item>Logout</Dropdown.Item>
                </div>
              )}
            </Dropdown>
            {shouldShowCart && (
              <Link to={routes.cart}>
                <Nav.Item icon={<Icon icon="shopping-cart" />}>
                  My Cart ({itemsCount})
                </Nav.Item>
              </Link>
            )}
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Affix>
  )
}
