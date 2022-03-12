
import getImage from './default/images/ImagesResources'
import getStyle from './default/styles/ThemeStyle'
import getSize from './default/sizes/ThemeSize'

function getThemeImage(moduleName : String, imageName : String) {
    return getImage(moduleName, imageName)
}

function getThemeStyle(styleName: String) {
    return getStyle(styleName)
}

function getThemeSize(sizeName: String) {
    return getSize(sizeName)
}

export {
    getThemeImage as getDefaultThemeImage,
    getThemeStyle as getDefaultThemeStyle,
    // getThemeColor as getDefaultThemeColor,
    getThemeSize as getDefaultThemeSize,
}
