import Module from './model/Module'
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

/*
    提供Theme方法  ThemeImage ThemeSize ThemeStyle
    用法
        ThemeSize(AllSizeKeys.videoListCellHeight)
        ThemeStyle(AllStyleKeys.style)
        ThemeImage(Module.video, AllImagesKeys.check)
*/
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
