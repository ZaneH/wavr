import { routes } from '@wavegrid/common/constants'
import React, { useEffect, useState } from 'react'
import { Tag as Rtag } from 'rsuite'
import { Maybe, Tag, useTagsQuery } from '../../generated/types'
import { useGo } from '../../hooks/useGo'

interface Props {
  defaultAmount: number
}

const TagList = ({ defaultAmount }: Props) => {
  const [numOfTags, setNumOfTags] = useState(defaultAmount)
  const [tags, setTags] = useState<Array<Maybe<Partial<Tag>>>>([])
  const { go } = useGo()

  const { data: tagsData } = useTagsQuery({
    variables: {
      first: numOfTags,
    },
  })

  // this prevents a visual "flash" issue
  useEffect(() => {
    setTags(tagsData?.tags ?? tags)
  }, [tagsData])

  return (
    <>
      {tags.map((tag) => (
        <Rtag className="larger-tag">
          <span onClick={() => go.push(routes.tag, { tagId: tag?.id })}>
            {tag?.name}
          </span>
        </Rtag>
      ))}
      <Rtag className="larger-tag">
        <span
          onClick={() => {
            setNumOfTags(numOfTags + 10)
          }}
        >
          ...
        </span>
      </Rtag>
    </>
  )
}

export default TagList
