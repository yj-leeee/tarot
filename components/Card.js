import React from "react"
import {View,Text,Image,StyleSheet, TouchableOpacity} from "react-native";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function Card({content}) {

    const somethingDoFunction = () => {
        alert("타로 카드 선택화면으로 넘어갈 예정입니다.")
    }
    return ( <TouchableOpacity style={styles.card} onPress={somethingDoFunction}>
        <Image style={styles.cardImage} source={{uri:content.image}}/>
        <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{content.title}</Text>
        <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
        </View>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({

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
})