import React from 'react'

import { Container, CardTitle, cardStyles } from './styles'

import { dataProp } from '~/components/FlatListCreditCard'
import { Animated, StyleSheet, Dimensions } from 'react-native'

export const Cards = (data: dataProp) => {
  const MARGIN = 16
  const { height: wHeight } = Dimensions.get('window')
  const height = wHeight - 64
  const position = Animated.subtract(data.item.item.id * cardStyles.height, data.y)
  const isDisappearing = -cardStyles.height
  const isTop = 0
  const isBottom = height - cardStyles.height
  const isAppearing = height

  const styles = StyleSheet.create({
    card: {
      marginVertical: MARGIN,
      alignSelf: 'center',
    },
  })

  const translateY = Animated.add(
    Animated.add(
      data.y,
      data.y.interpolate({
        inputRange: [0, 0.0001 + data.item.index * cardStyles.height],
        outputRange: [0, -data.item.index * cardStyles.height],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -cardStyles.height / 4],
      extrapolate: 'clamp',
    }),
  )

  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  })

  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  })

  return (
    <Container
      style={[
        styles.card,
        { backgroundColor: data.item.item.color, opacity, transform: [{ translateY }, { scale }] },
      ]}
      key={data.item.item.id}
    >
      <CardTitle>{data?.item?.item?.title}</CardTitle>
    </Container>
  )
}
