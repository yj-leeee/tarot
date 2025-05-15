import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions} from 'react-native';

const main_title = '유진이의 타로 하우스'; 
const main_tarot_image = 'https://firebasestorage.googleapis.com/v0/b/glenntarotapp.appspot.com/o/banner%2Fmain_tarot.png?alt=media&token=f2f5a65a-14e2-4624-a564-c5c7dc5f2f5d&_gl=1*174kdyp*_ga*ODMyNzMxNjIxLjE2NjY0NzkwMDE.*_ga_CW55HF8NVT*MTY5NzM3OTUwNS4zMy4xLjE2OTczNzk1NjkuNjAuMC4w'
const money_tarot_image = 'https://firebasestorage.googleapis.com/v0/b/glenntarotapp.appspot.com/o/banner%2Fmoney_tarot.png?alt=media&token=adc5e157-2056-4609-af43-42580b173bd2&_gl=1*1k3f1xx*_ga*ODMyNzMxNjIxLjE2NjY0NzkwMDE.*_ga_CW55HF8NVT*MTY5NzM3OTUwNS4zMy4xLjE2OTczNzk1OTkuMzAuMC4w'
const love_tarot_image = 'https://firebasestorage.googleapis.com/v0/b/glenntarotapp.appspot.com/o/banner%2Flove_tarot.png?alt=media&token=2a34e64c-ca21-41e2-b271-0fcdfa3fcb88&_gl=1*p0tcsu*_ga*ODMyNzMxNjIxLjE2NjY0NzkwMDE.*_ga_CW55HF8NVT*MTY5NzM4MTY2MC4zNC4xLjE2OTczODE2NzEuNDkuMC4w'
const background_image = 'https://firebasestorage.googleapis.com/v0/b/glenntarotapp.appspot.com/o/background%2Fbackground02.png?alt=media&token=8a90848c-488a-4f0c-88d2-1d1a2c27ad04&_gl=1*1aqtxz4*_ga*ODMyNzMxNjIxLjE2NjY0NzkwMDE.*_ga_CW55HF8NVT*MTY5NzM4MTY2MC4zNC4xLjE2OTczODM3NDQuNDkuMC4w';

const money_tarot_title = '나의 재물운';
const money_tarot_desc = '나는 얼마나 많은 돈을 평생에 벌 수 있을까? 올해보다 내년은 더 많이 벌 수 있을까? 궁금했던 재물운을 살펴봅니다.';
const love_tarot_title = '나의 연애운';
const love_tarot_desc = '올해 나는 연애 할 수 있을지! 지금 만나고 있는 연인과 앞으로의 미래는 어떨지! 너무 궁금합니다. 점을 같이 보아요';
const continue_text = '건강운도 곧 준비중입니다 🚧'

export default function App() {
  
  const somethingDoFunction = () => {
    alert("타로 카드 선택화면으로 넘어갈 예정입니다.")
  }
  return (

    <View style={{flex:1}}>

      {/* 배경 이미지를 위한 엘리먼트 한 묶음 */}
      <ImageBackground 
      source={{uri:background_image}} 
      style={[styles.fixed, styles.containter]} //이런식으로 두 개의 스타일 값을 복수로 넣을 수 있음
      resizeMode="cover"/>


      {/* 실제 내용이 들어가는 엘리먼트 한 묶음 */}
      <ScrollView  style={[styles.fixed, styles.containter]}>
        <Text style={styles.title}>{main_title}</Text>
        <Image style={styles.mainImage} source={{uri:main_tarot_image}}/>
        <View style={styles.cardContainer}>

          {/* 하나의 카드 영역을 나타내는 View */}
          <TouchableOpacity style={styles.card} onPress={somethingDoFunction}>
            <Image style={styles.cardImage} source={{uri:money_tarot_image}}/>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{money_tarot_title}</Text>
              <Text style={styles.cardDesc} numberOfLines={3}>{money_tarot_desc}</Text>
            </View>
          </TouchableOpacity>

          {/* 하나의 카드 영역을 나타내는 View */}
          <TouchableOpacity style={styles.card} onPress={somethingDoFunction}>
            <Image style={styles.cardImage} source={{uri:love_tarot_image}}/>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{love_tarot_title}</Text>
              <Text style={styles.cardDesc} numberOfLines={3}>{love_tarot_desc}</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.card_later}>
            <Text>{continue_text}</Text>
          </View>
          
        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({

  containter: {
    width: Dimensions.get("window").width, // 윈도우 == 모바일 화면상의 가로 전체 길이를 가져옴
    height: Dimensions.get("window").height // 윈도우 == 모바일 화면상의 세로 전체 길이를 가져옴
  },
  //화면에 상시 고정
  //이 코드가 들어가면 같은 레벨의 묶음길이 겹쳐질 수 있음.
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  title: {
    //폰트 사이즈
    fontSize: 30,
    //폰트 두께
    fontWeight: '700',
    //위 공간으로 부터 이격
    marginTop:100,
	    //왼쪽 공간으로 부터 이격'
    marginLeft:20
  },
  mainImage: {
    //컨텐츠의 넓이 값
    width:'90%',
    //컨텐츠의 높이 값
    height:200,
    //컨텐츠의 모서리 구부리기
    borderRadius:10,
    marginTop:20,
    //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    //각 속성의 값들은 공식문서에 고대로~ 나와 있음
    alignSelf:"center"
  },
  cardContainer: {
    width:'90%',
    alignSelf:"center"
  },
  card:{
    flex:1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임 
    flexDirection:"row",
    marginTop:15

  },
  cardImage: {
    flex:1,
    width:100,
    height:100,
    borderRadius:10,
  },
  cardText: {
    flex:2,
    flexDirection:"column",
    marginLeft:10,
  },
  cardTitle: {
    fontSize:20,
    fontWeight:"700"
  },
  cardDesc: {
    fontSize:15
  },
  cardDate: {
    fontSize:10,
    color:"#A6A6A6",
  },
  card_later: {
    borderWidth: 2,
    borderColor:"#333",
    borderRadius:10,
    borderStyle:"dotted",
    marginTop:15,
    height:70,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    opacity:0.5
  }


});