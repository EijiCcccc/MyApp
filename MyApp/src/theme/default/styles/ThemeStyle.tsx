import { StyleSheet } from "react-native";
import { windowWidth } from "../../../commons/utils/screenUtil";
import AllSizeKeys from "../AllSizeKeys";
import AllStyleKeys from "../AllStyleKeys";
import getSize from "../sizes/ThemeSize";


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
        height: getSize(AllSizeKeys.lineHeight),
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
