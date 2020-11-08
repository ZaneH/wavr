import React from 'react'
import { Container, Content, Divider, Header } from 'rsuite'
import FavoritesTable from './FavoritesTable'

const Favorites = () => {
  return (
    <Container>
      <Header>
        <h2>Favorites</h2>
        <Divider />
      </Header>
      <Content>
        <FavoritesTable />
      </Content>
    </Container>
  )
}

export default Favorites
