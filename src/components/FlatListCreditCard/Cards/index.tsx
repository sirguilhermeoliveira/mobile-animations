import React from 'react'

import { Container, CardTitle } from './styles'

import { dataProp } from '~/components/FlatListCreditCard'

export const Cards = (data: dataProp) => {
  return (
    <Container>
      <CardTitle>{data?.item?.title}</CardTitle>
    </Container>
  )
}
