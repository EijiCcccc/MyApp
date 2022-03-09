import { Dimensions } from 'react-native'

export const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

export const getScreenScale = () => {
    let designSize = {width: 414,height: 896}
    return windowWidth / designSize.width
}