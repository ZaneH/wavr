import React from 'react'
import { Footer, Nav, Navbar } from 'rsuite'

const SiteFooter = () => {
  return (
    <Footer className="site-footer">
      <Navbar>
        <Navbar.Header>2020 Wavegrid &copy;</Navbar.Header>
        <Navbar.Body>
          <Nav pullRight>
            <a href="mailto:dmca@wavr.me">
              <Nav.Item>DMCA</Nav.Item>
            </a>
            <a
              href="https://help.wavr.me/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Nav.Item>Help</Nav.Item>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://help.wavr.me/legal/privacy-policy"
            >
              <Nav.Item>Privacy</Nav.Item>
            </a>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Footer>
  )
}

export default SiteFooter
