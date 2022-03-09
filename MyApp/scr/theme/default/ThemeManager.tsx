import {
    getDefaultThemeImage, getDefaultThemeSize, getDefaultThemeStyle,
} from '../Theme'

//可更改主题，需要替换default中文件
var ThemeName = {
    default: 'default',
}

var ThemeType = {
    default: ThemeName.default,
}

let currentTheme = ThemeType.default

//可以设置主题，当前默认为default
export function setCurTheme(theme : any) {
    currentTheme = theme
}

// 获取图片， 需要传递Module, AllImagekeys中的key
export function getThemeImage(moduleName: any, imageName: any) {
    switch(currentTheme) {
        case ThemeType.default: 
            return getDefaultThemeImage(moduleName, imageName)
    }
}

//获取样式, 需要传递AllStyleKeys中的key
export function getThemeStyle(styleName : any) {
    switch(currentTheme) {
        case ThemeType.default: 
            return getDefaultThemeStyle(styleName)
    }
}

//获取size，需要传递AllSizeKeys中的key
export function getThemeSize(sizeName : any) : number {
    switch(currentTheme) {
        case ThemeType.default: 
            return getDefaultThemeSize(sizeName)
        default:
            return getDefaultThemeSize(sizeName)
    }
}
