/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
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
import { getScreenScale } from './scr/commons/utils/screenUtil';
import AllSizeKeys from './scr/theme/default/AllSizeKeys';
import AllStyleKeys from './scr/theme/default/AllStyleKeys';
import { ThemeSize, ThemeStyle } from './scr/theme/default/ThemeAdapter';
import Cell from './scr/view/cell';


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

const App = () => {

  const [ selectedId, setSelectedId ] = useState()

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem: React.FC<{item: any, index: number}> = ({item, index}) => {
    return <Cell title={item.title} subTitle={item.subTitle} onPress={() => {setSelectedId(item.id)}} isSelected={item.id === selectedId}/>
  }

  const keyExtractor = (item: any) => item.id

  const ItemSeparatorComponent = () => <View style={ThemeStyle(AllStyleKeys.lineStyle)}></View>

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

export default App;
