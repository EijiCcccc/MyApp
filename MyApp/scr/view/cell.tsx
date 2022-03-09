
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { getScreenScale, windowWidth } from '../commons/utils/screenUtil';
import AllSizeKeys from '../theme/default/AllSizeKeys';
import AllStyleKeys from '../theme/default/AllStyleKeys';
import Module from '../theme/default/model/Module';
import { ImagesKeys, ThemeImage, ThemeSize, ThemeStyle } from '../theme/default/ThemeAdapter';

const Cell: React.FC<{title: String, subTitle: String, onPress: () => void, isSelected : boolean}> = ({title, subTitle, onPress, isSelected}) => {
  const backgroundColor = isSelected ? 'black': 'white'
  const fontWeight = isSelected ? 'bold' : 'normal'
    return (
      <View style={styles.cellContainerStyle}>
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
            style={[styles.selectImageStyle, {backgroundColor}]}/>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    cellContainerStyle: {
      width: windowWidth,
      height: ThemeSize(AllSizeKeys.videoListHeight),
      backgroundColor: "rgba(255, 255, 255, 0.08)",
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