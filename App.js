import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';

const main_title = '유진이 타로 앱'
const main_tarot_image  = 'https://firebasestorage.google'
const money_tarot_image =  'https://firebasestorage.googl'
const love_tarot_image = 'https://firebasestorage.google'
const background_image = 'https://firebasestorage.google'

const money_tarot_title = '나의 재물운';
const money_tarot_desc = '나는 얼마나 많은 돈을 벌 수 있을끼?'
const love_tarot_title = '나의 연애운';
const love_tarot_desc = '올해 나는 연애를 할 수 있을까?'
const continue_text = '건강운도 곧 준비중입니다.'

export default function App() {
  
  LogBox.ignoreLogs(['Warning: ...']);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.subContainaerOne}></View>
        <View style={styles.subContainaerTwo}></View>
      </View>
    </View>
  );
}
// styles 변수 이름 답게 화면을 그려주는, 더 자세히는 JSX문법을 꾸며주는 내용을 담고 있다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  subContainaerOne: {
    flex: 1,
    backgroundColor:"yellow"
  },
  subContainaerTwo:{
    flex:1,
    backgroundColor:"green"
  }
});
