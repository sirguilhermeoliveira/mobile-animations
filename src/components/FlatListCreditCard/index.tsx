import { Cards } from './Cards'
import React, { useRef } from 'react'
import { CardsContainer, AnimationObservationText } from './styles'
import { Animated, FlatList } from 'react-native'

export type dataProp = {
  item: {
    item: {
      id: number
      title: string
      color: string
    }
    index: number
  }
  y: Animated.Value
}

type dataWithouItemProp = {
  id: number
  title: string
  color: string
}

export const FlatListCreditCard = () => {
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

  const y = useRef(new Animated.Value(0)).current

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  })

  const mockData: dataWithouItemProp[] = [
    { id: 1, title: 'Test Credit Card 1', color: '#901981' },
    { id: 2, title: 'Test Credit Card 2', color: 'blue' },
    { id: 3, title: 'Test Credit Card 3', color: 'green' },
    { id: 4, title: 'Test Credit Card 4', color: 'yellow' },
    { id: 5, title: 'Test Credit Card 5', color: '#819198' },
    { id: 6, title: 'Test Credit Card 6', color: '#178' },
  ]
  return (
    <CardsContainer>
      <AnimationObservationText>
        This animation is a FlatView, the component is a ScrollView so it only works as expected
        outside this view.
      </AnimationObservationText>
      <AnimatedFlatList
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
        data={mockData}
        keyExtractor={(_: any) => _.id}
        renderItem={(item: any) => <Cards {...{ item, y }} />}
        {...{ onScroll }}
      />
    </CardsContainer>
  )
}
