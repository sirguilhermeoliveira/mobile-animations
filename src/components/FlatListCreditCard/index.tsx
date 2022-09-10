import { Cards } from './Cards'
import React from 'react'
import { CardsContainer } from './styles'
import { Animated, FlatList } from 'react-native'

export type dataProp = {
  item: {
    item: {
      id: number
      title: string
    }
  }
}

type dataWithouItemProp = {
  id: number
  title: string
}

export const FlatListCreditCard = () => {
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

  const y = new Animated.Value(0)

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  })

  const mockData: dataWithouItemProp[] = [
    { id: 1, title: 'Test Credit Card 1' },
    { id: 2, title: 'Test Credit Card 2' },
    { id: 3, title: 'Test Credit Card 3' },
    { id: 4, title: 'Test Credit Card 3' },
    { id: 5, title: 'Test Credit Card 3' },
    { id: 6, title: 'Test Credit Card 3' },
  ]
  return (
    <CardsContainer>
      <AnimatedFlatList
        scrollEventThrottle={16} // ver do que se trata
        bounces={false} // ver do que se trata
        data={mockData}
        keyExtractor={(_: any) => _.id}
        renderItem={(item: any) => <Cards {...{ item, y }} />}
        {...{ onScroll }}
      />
    </CardsContainer>
  )
}
