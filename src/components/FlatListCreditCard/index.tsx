import { Cards } from './Cards'
import React from 'react'
import { CardsContainer } from './styles'

type dataProp = {
  item: {
    id: number
    title: string
  }
}

type dataWithouItemProp = {
  id: number
  title: string
}

export const FlatListCreditCard = () => {
  const mockData: dataWithouItemProp[] = [
    { id: 1, title: 'Test Credit Card 1' },
    { id: 2, title: 'Test Credit Card 2' },
    { id: 3, title: 'Test Credit Card 3' },
    { id: 4, title: 'Test Credit Card 3' },
    { id: 5, title: 'Test Credit Card 3' },
    { id: 6, title: 'Test Credit Card 3' },
  ]
  return (
    <CardsContainer
      data={mockData}
      keyExtractor={(_: dataWithouItemProp): number => _.id}
      renderItem={(item: dataProp): JSX.Element => <Cards data={item} />}
    ></CardsContainer>
  )
}
