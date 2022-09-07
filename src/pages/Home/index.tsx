import { ButtonSwitch, FlatListCreditCard, OpenOrCloseAnimations } from '@components'
import React from 'react'

import { Container, Description, Title } from './styles'

export function Home(): JSX.Element {
  const data = [
    { id: 1, route: <FlatListCreditCard />, title: 'FlatListCreditCard' },
    { id: 2, route: <ButtonSwitch />, title: 'ButtonSwitch' },
  ]

  return (
    <Container>
      <Title>Mobile Animations Project</Title>
      <Description>Click on a animation title to show in action.</Description>
      {data &&
        data.map((props, index) => {
          return <OpenOrCloseAnimations key={index} data={props}></OpenOrCloseAnimations>
        })}
    </Container>
  )
}
