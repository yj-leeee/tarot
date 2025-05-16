import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, TouchableWithoutFeedback} from 'react-native';

const main_title = '마음이 이끄는 대로 카드 한 장을 \n선택하세요'; 
const background_image = 'https://firebasestorage.googleapis.com/v0/b/glenntarotapp.appspot.com/o/background%2Fbackground02.png?alt=media&token=8a90848c-488a-4f0c-88d2-1d1a2c27ad04&_gl=1*1aqtxz4*_ga*ODMyNzMxNjIxLjE2NjY0NzkwMDE.*_ga_CW55HF8NVT*MTY5NzM4MTY2MC4zNC4xLjE2OTczODM3NDQuNDkuMC4w';
const card_image = 'https://firebasestorage.googleapis.com/v0/b/tarot-api-f2f0f.appspot.com/o/original%2Fcard-min.png?alt=media&token=2e599047-ff41-4e2c-84d6-25dec7808c8a&_gl=1*rqkzau*_ga*ODMyNzMxNjIxLjE2NjY0NzkwMDE.*_ga_CW55HF8NVT*MTY5ODU4NTc2Ni41MS4xLjE2OTg1ODU5MjUuNTUuMC4w';
const card_select_text = '선택'

export default function CardPage() {
  
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
      <View  style={[styles.fixed, styles.containter]}>
        <Text style={styles.title}>{main_title}</Text>


        <View style={[styles.cardContainer, styles.cardRowArea]}>
            <TouchableWithoutFeedback onPress={somethingDoFunction}>
                <Image style={styles.cardImage} source={{uri:card_image}}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={somethingDoFunction}>
                <Image style={styles.cardImage} source={{uri:card_image}}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={somethingDoFunction}>
                <Image style={styles.cardImage} source={{uri:card_image}}/>
            </TouchableWithoutFeedback>
        </View>

        <View style={[styles.cardContainer, styles.cardRowArea]}>
            <TouchableWithoutFeedback onPress={somethingDoFunction}>
                <Image style={styles.cardImage} source={{uri:card_image}}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={somethingDoFunction}>
                <Image style={styles.cardImage} source={{uri:card_image}}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={somethingDoFunction}>
                <Image style={styles.cardImage} source={{uri:card_image}}/>
            </TouchableWithoutFeedback>
        </View>

        <View style={[styles.cardContainer, styles.cardRowArea]}>
            <TouchableWithoutFeedback onPress={somethingDoFunction}>
                <Image style={styles.cardImage} source={{uri:card_image}}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={somethingDoFunction}>
                <Image style={styles.cardImage} source={{uri:card_image}}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={somethingDoFunction}>
                <Image style={styles.cardImage} source={{uri:card_image}}/>
            </TouchableWithoutFeedback>
        </View>
       

        <View style={styles.cardContainer}>
            <View style={styles.card_select}>
                <Text style={styles.card_select_text}>{card_select_text}</Text>
            </View>
        </View>



      </View>
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
    fontSize: 20,
    //폰트 두께
    fontWeight: '700',
    //위 공간으로 부터 이격
    marginTop:100,
	    //왼쪽 공간으로 부터 이격'
    textAlign:"center"
  },
  cardContainer: {
    flex:1,
    width:'90%',
    alignSelf:"center"
  },
  cardRowArea: {
    flexDirection:"row",
    marginTop:20
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
    borderRadius:10,
    margin:5
  },
  card_select: {
    backgroundColor:"#333",
    borderRadius:10,
    marginTop:20,
    height:70,
    justifyContent:"center",
    alignItems:"center",
  },
  card_select_text: {
    color:"#fff"
  }


});