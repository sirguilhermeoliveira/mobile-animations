import styled from 'styled-components/native';

import { Dimensions, Animated } from 'react-native'

const { width } = Dimensions.get('window');
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

export const cardStyles = {
        width: CARD_WIDTH,
        height: CARD_HEIGHT
}

export const Container = styled(Animated.View)`
width: ${cardStyles.width};
height: ${cardStyles.height};
margin-bottom: 20px;
border-radius: 20px;
`;

export const CardTitle = styled.Text`
text-align: center;
`;

