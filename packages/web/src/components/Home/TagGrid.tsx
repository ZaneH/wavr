import React from 'react'
import { Col, FlexboxGrid, Grid, Row } from 'rsuite'
import { Tag } from '../../generated/types'
import { useGo } from '../../hooks/useGo'
import { routes } from '@wavegrid/common/constants'

interface TagWithImage extends Tag {
  image: string
}

const tags: Partial<TagWithImage>[] = [
  {
    id: 'one',
    name: 'Graphic Packs',
    image: '/img/tag-grid.png',
  },
  {
    id: 'seven',
    name: 'VST Presets',
    image: '/img/tag-grid.png',
  },
  {
    id: 'four',
    name: 'Trap',
    image: '/img/tag-grid.png',
  },
  {
    id: 'nine',
    name: 'One Shots',
    image: '/img/tag-grid.png',
  },
  {
    id: 'eight',
    name: 'Drum Kits',
    image: '/img/tag-grid.png',
  },
  {
    id: 'six',
    name: 'MIDI',
    image: '/img/tag-grid.png',
  },
]

const TagGrid = () => {
  const { go } = useGo()

  return (
    <Grid fluid>
      <Row>
        {tags.map((tag) => (
          <Col xs={12} md={8}>
            <span
              onClick={() => go.push(routes.tag, { tagId: tag?.id })}
              className="tag-grid-container"
            >
              <img
                className="tag-grid-image"
                alt="Thumbnail"
                src={tag?.image}
              />
              <h4>{tag?.name}</h4>
            </span>
          </Col>
        ))}
      </Row>
    </Grid>
  )
}

export default TagGrid
