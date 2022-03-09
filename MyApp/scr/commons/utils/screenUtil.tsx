import { Dimensions } from 'react-native'

//获取屏幕大小
export const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

// 已屏幕为414 * 896 为标准调整控件适配
export const getScreenScale = () => {
    let designSize = {width: 414,height: 896}
    return windowWidth / designSize.width
}