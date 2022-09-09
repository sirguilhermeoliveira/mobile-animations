import React from 'react'

import { Container, CardTitle } from './styles'

type dataProp = {
  data: {
    item: {
      id: number
      title: string
    }
  }
}

export const Cards = (data: dataProp) => {
  return (
    <Container>
      <CardTitle>{data.data?.item?.title}</CardTitle>
    </Container>
  )
}
