import React, { useState } from 'react'

import { BolderText, ContainerAnimation, OpenOrCloseAnimationText, BottomBar } from './styles'

type dataProps = {
  data: {
    route: JSX.Element
    title: string
  }
}

export const OpenOrCloseAnimations = ({ data }: dataProps) => {
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
