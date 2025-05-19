import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Dimensions, LogBox} from 'react-native';
import Card from '../components/Card';
import Loading from '../components/Loading';
import data from '../data.json';

const main_title = '유진의 타로 하우스'; 
const background_image = 'https://firebasestorage.googleapis.com/v0/b/glenntarotapp.appspot.com/o/background%2Fbackground02.png?alt=media&token=8a90848c-488a-4f0c-88d2-1d1a2c27ad04&_gl=1*1aqtxz4*_ga*ODMyNzMxNjIxLjE2NjY0NzkwMDE.*_ga_CW55HF8NVT*MTY5NzM4MTY2MC4zNC4xLjE2OTczODM3NDQuNDkuMC4w';
const main_tarot_image = 'https://firebasestorage.googleapis.com/v0/b/glenntarotapp.appspot.com/o/banner%2Fmain_tarot.png?alt=media&token=f2f5a65a-14e2-4624-a564-c5c7dc5f2f5d&_gl=1*174kdyp*_ga*ODMyNzMxNjIxLjE2NjY0NzkwMDE.*_ga_CW55HF8NVT*MTY5NzM3OTUwNS4zMy4xLjE2OTczNzk1NjkuNjAuMC4w'

const continue_text = '건강운도 곧 준비중입니다 🚧'

export default function MainPage() {
  LogBox.ignoreLogs(['Warning: ...']);

    //useState 사용법
    //[state,setState] 에서 state는 이 컴포넌트에서 관리될 상태 데이터를 담고 있는 변수
    //setState는 state를 변경시킬때 사용해야하는 함수

    //모두 다 useState가 선물해줌
    //useState()안에 전달되는 값은 state 초기값
    const [state,setState] = useState([])
    //하단의 return 문이 실행되어 화면이 그려진다음 실행되는 useEffect 함수
    //내부에서 data.json으로 부터 가져온 데이터를 state 상태에 담고 있음
    const [isReady,setIsReady] = useState(true)

    //하단의 return 문이 실행되어 화면이 그려진다음 실행되는 useEffect 함수
    //내부에서 data.json으로 부터 가져온 데이터를 state 상태에 담고 있음
    useEffect(()=>{
      setState(data)
      setTimeout(()=>{
        setIsReady(false)
      },1000)
     
    },[])
  

    const somethingDoFunction = () => {
        alert("타로 카드 선택화면으로 넘어갈 예정입니다.")
    }
    return isReady ? <Loading/> : (

        <View style={{flex:1}}>
        <StatusBar style="light" />
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


            {state.list.map((d,i) => {

                //data.json의 list 배열에서 하나씩 꺼내와 카드를 완성
                //최상단 묶어지는 엘리먼트(태그)엔 항상 key 속성을 두고 유니크한 값을 줘야 함
                //컴퓨터가 각각이 다른 내용의 카드임을 알기 위한 기준값이 됨
                return (<Card key={i} content={d}/>);
                

                // 기존 코드
                // <TouchableOpacity key={i} style={styles.card} onPress={somethingDoFunction}>
                //     <Image style={styles.cardImage} source={{uri:d.image}}/>
                //     <View style={styles.cardText}>
                //     <Text style={styles.cardTitle}>{d.title}</Text>
                //     <Text style={styles.cardDesc} numberOfLines={3}>{d.desc}</Text>
                //     </View>
                // </TouchableOpacity>
            })}
            

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