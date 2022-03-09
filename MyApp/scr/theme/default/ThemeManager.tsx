import {
    getDefaultThemeImage, getDefaultThemeSize, getDefaultThemeStyle,
} from '../Theme'

var ThemeName = {
    default: 'default',
}

var ThemeType = {
    default: ThemeName.default,
}

let currentTheme = ThemeType.default

export function setCurTheme(theme : any) {
    currentTheme = theme
}

export function getThemeImage(moduleName: any, imageName: any) {
    switch(currentTheme) {
        case ThemeType.default: 
            return getDefaultThemeImage(moduleName, imageName)
    }
}

export function getThemeStyle(styleName : any) {
    switch(currentTheme) {
        case ThemeType.default: 
            return getDefaultThemeStyle(styleName)
    }
}

export function getThemeSize(sizeName : any) : number {
    switch(currentTheme) {
        case ThemeType.default: 
            return getDefaultThemeSize(sizeName)
        default:
            return getDefaultThemeSize(sizeName)
    }
}
