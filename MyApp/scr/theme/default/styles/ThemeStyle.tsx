import { StyleSheet } from "react-native";
import { windowWidth } from "../../../commons/utils/screenUtil";
import AllStyleKeys from "../AllStyleKeys";


//设置公共styles
const ThemeStyle = StyleSheet.create({
    [AllStyleKeys.fourteenSizeTextStyle]: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "bold",
        color: "#000000",
    },
    [AllStyleKeys.lineStyle]: {
        width: windowWidth,
        height: 2,
        backgroundColor: 'black',
    },
    [AllStyleKeys.eighteenSizeTextStyle]: {
        fontSize: 18,
        lineHeight: 25,
        fontWeight: "bold",
        color: "#000000",
    }
    
})

export default function getImage(styleName: any) {
    return ThemeStyle[styleName]
}
