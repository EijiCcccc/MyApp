import Module from '../default/model/Module'
import AllImageKeys from './AllImageKeys'
import AllSizeKeys from './AllSizeKeys'
// import AllColorKeys from './AllColorKeys'

import {
    getThemeImage,
    // getThemeColor,
    getThemeSize,
    setCurTheme,
    getThemeStyle,
} from './ThemeManager'

export {
    Module,
    setCurTheme,
    AllImageKeys as ImagesKeys,
    AllSizeKeys as SizeKeys,
    // AllColorKeys as ColorKeys,
    getThemeImage as ThemeImage,
    getThemeStyle as ThemeStyle,
    // getThemeColor as ThemeColor,
    getThemeSize as ThemeSize,
}
