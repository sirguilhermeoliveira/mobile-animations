import React, { useState } from 'react'

import { BolderText, ContainerAnimation, OpenOrCloseAnimationText, BottomBar } from './styles'

export const OpenOrCloseAnimations = ({ data }: any) => {
  const [openAnimation, setOpenAnimation] = useState(false)
  return (
    <>
      {openAnimation ? (
        <ContainerAnimation>
          <OpenOrCloseAnimationText
            onPress={() => {
              setOpenAnimation(false)
            }}
          >
            <BolderText>Press to close animation: - </BolderText> {data.title}
          </OpenOrCloseAnimationText>
          {data.route}
        </ContainerAnimation>
      ) : (
        <ContainerAnimation>
          <OpenOrCloseAnimationText
            onPress={() => {
              setOpenAnimation(true)
            }}
          >
            <BolderText>Press to open animation: + </BolderText>
            {data.title}
          </OpenOrCloseAnimationText>
        </ContainerAnimation>
      )}
      <BottomBar />
    </>
  )
}
