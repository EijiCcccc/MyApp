import React, { useState, Component } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
  View
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import AllSizeKeys from '../../theme/default/AllSizeKeys';
import AllStyleKeys from '../../theme/default/AllStyleKeys';
import { ThemeSize, ThemeStyle } from '../../theme/default/ThemeAdapter';
import Cell from '../../view/video/component/cell';

// 构造数据  模拟100条数据，用id区分每个元素
const Data = () => {
  let data = []
  for(let i = 0; i < 100; i++) {
    data.push({
      title: "Template Name",
      subTitle: '8 SHOT, 15.0s',
      id: i,
    })
  }
  return data
}

//视频列表
const VideoList = () => {
  const [ selectedId, setSelectedId ] = useState()

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem: React.FC<{item: any, index: number}> = ({item, index}) => {
    return <Cell title={item.title} subTitle={item.subTitle} onPress={() => {setSelectedId(item.id)}} isSelected={item.id === selectedId}/>
  }

  const keyExtractor = (item: any) => item.id

  // 列表分割线
  const ItemSeparatorComponent = () => <View style={ThemeStyle(AllStyleKeys.lineStyle)}></View>

  //头部导航模拟 todo: 构建全局导航
  const NavHead : React.FC<{navTitle: string}> = ({navTitle}) => <Text style={[ThemeStyle(AllStyleKeys.eighteenSizeTextStyle), styles.navHeaderStyle]}>{navTitle}</Text>

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavHead navTitle='Template Name'/>
      <FlatList
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        extraData={selectedId}
        keyExtractor={keyExtractor}
        getItemLayout={(data, index) => ({length: ThemeSize(AllSizeKeys.videoListHeight), offset: index * ThemeSize(AllSizeKeys.videoListHeight), index})}
        data={Data()}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navHeaderStyle: {
    textAlign: 'center',
  }
});

export default VideoList