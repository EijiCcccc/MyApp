
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getScreenScale, windowWidth } from '../../../commons/utils/screenUtil';
import AllSizeKeys from '../../../theme/default/AllSizeKeys';
import AllStyleKeys from '../../../theme/default/AllStyleKeys';
import Module from '../../../theme/default/model/Module';
import { ImagesKeys, ThemeImage, ThemeSize, ThemeStyle } from '../../../theme/default/ThemeAdapter';

/*
  用于视频列表cell  todo： 要实现video视频播放等
  @param title 标题
  @param subTitle 描述
  @param isSelected 是否选择cell
  @param onPress 点击视频播放按钮回调

  Text 是否需要根据系统大小进行缩放，需要封装一层TextView 设置allowFontScaling = {false}
  TouchableOpacity 点击效果可以封装一层，以及点击区域是否为整个cell
*/
const Cell: React.FC<{title: String, subTitle: String, onPress: () => void, isSelected : boolean}> = ({title, subTitle, onPress, isSelected}) => {
  const backgroundColor =  isSelected ? "rgba(0, 0, 0, 0.08)" : Colors.lighter
  const fontWeight = isSelected ? 'bold' : 'normal'
    return (
      <View style={[styles.cellContainerStyle, {backgroundColor}]}>
        <TouchableOpacity 
          onPress={onPress}
          style={styles.videoStyle}>
          <Image 
            source={isSelected ? ThemeImage(Module.video, ImagesKeys.pauseButton) : ThemeImage(Module.video, ImagesKeys.playButton)}
            style={styles.playIconStyle}/>
        </TouchableOpacity>
        <View style={styles.textViewStyle}>
          <View>
            <Text style={[ThemeStyle(AllStyleKeys.fourteenSizeTextStyle), {fontWeight}]}>{title}</Text>
            <Text style={[ThemeStyle(AllStyleKeys.fourteenSizeTextStyle), styles.subTitleMarginStyle, {fontWeight}]}>{subTitle}</Text>
          </View>
          <Image 
            source={isSelected ? ThemeImage(Module.video, ImagesKeys.checkSelect) : ThemeImage(Module.video, ImagesKeys.check)}
            style={[styles.selectImageStyle, {backgroundColor: isSelected ? 'black': 'white'}]}/>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    cellContainerStyle: {
      width: windowWidth,
      height: ThemeSize(AllSizeKeys.videoListCellHeight),
      paddingLeft: 17,
      paddingRight: 17,
    },
    videoStyle: {
      width: windowWidth - 34,
      marginTop: 23,
      height: 160 * getScreenScale(),
      borderRadius: 8,
      borderWidth: 2,
      borderColor: "black",
      justifyContent: 'center',
      alignItems: 'center',
    },
    playIconStyle: {
      width: 64,
      height: 64,
    },
    textViewStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 13,
    },
    subTitleMarginStyle: {
      marginTop: 5,
    },
    selectImageStyle: {
      width: 44,
      height: 44,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: "black"
    }
  });

export default Cell