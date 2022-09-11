import React from 'react'
import { View } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import { Container, IndividualButton } from './styles'

export const ButtonSwitch = () => {
  const mockData = [
    { id: 1, title: 'Teste 1' },
    { id: 2, title: 'Teste 2' },
    { id: 3, title: 'Teste 3' },
    { id: 4, title: 'Teste 4' },
    { id: 5, title: 'Teste 5' },
    { id: 6, title: 'Teste 6' },
  ]

  return (
    <>
      <MaskedView
        style={{
          flex: 1,
          flexDirection: 'row',
          height: '100%',
          width: '100%',
        }}
        maskElement={
          <Container>
            {mockData &&
              mockData.map((data) => (
                <IndividualButton key={data.id}>{data.title}</IndividualButton>
              ))}
          </Container>
        }
      >
        <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
      </MaskedView>
    </>
  )
}
