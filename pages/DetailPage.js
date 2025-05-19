import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert } from 'react-native';

export default function DetailPage() {


    const tarot_data = {
        "type": "major",
        "image": "https://firebasestorage.googleapis.com/v0/b/glenntarotapp.appspot.com/o/banner%2Fdetail.png?alt=media&token=5267b3d2-756c-4fd6-a537-39682d63b124&_gl=1*n92z1r*_ga*ODMyNzMxNjIxLjE2NjY0NzkwMDE.*_ga_CW55HF8NVT*MTY5NzYyODU4NC4zNy4xLjE2OTc2Mjg2MjUuMTkuMC4w",
        "name": "The Fool Card",
        "value": 0,
        "kr": {
          "title": "바보",
          "total": "평소에 호기심이 많고, 새로운 경험에 적극적이며, 회복력도 강하기 때문에 긍정적인 사람인 것을 나타내. 그만큼 자유분방하기 때문에 일어나지 않은 미래에 대한 두려움이나 걱정이 없는 것이 강점이기도 하지만, 막상 일이 닥치면 허둥대는 모습도 보여지내. 하지만 그만큼 뒤끝없이 앞으로 나아갈 수 있는 능력은 큰 강점으로 작용해. 덕분에 새로운 경험을 통한 특별한 보상과 혜택의 기회도 남들보다 많지. 적성에 맞는 직업으로는 코미디언, 배우, SNS마케터, 유튜버, 정치 풍자 콘텐츠 제작자 등이 떠오르네!",
          "up": {
            "total": "정방향 바보 카드는 예상치 못한 흥미로운 모험이 곧 시작되리라는 것을 나타내. 이 여정은 맹목적일 가능성도 있지만, 그만큼 본인의 성장을 기대할 수 있을 것 같아! 혹은 이제까지 가본 적 없던 새로운 장소나 해외로 여행할 일이 생길 수도 있겠다! ",
            "money": "미리 축하할께! 바보 카드는 금전운에서 엄청 긍정적인 카드거든! 새로 시작하고 있거나 시작하게 될 프로젝트가 좋은 성과를 거두거나, 직장에서는 임금이 높아질 것을 암시하고 있어. 바보카드는 본질적으로 돈과 직업의 발전을 위한 큰 기회를 상징하니 꼭 기억해둬!",
            "love": "본인이 싱글이고, 파트너를 찾고 있다면 매우 좋은 징조야! 상상이상으로 쉽게 연애를 시작할 수 있다는 것을 의미하는데, 연애를 시작하게 될 파트너는 재미있고, 매력적이며, 낙천적인 사람이 될 것 같네? 어쩌면 진지한 관계로 발전하기 까지는 시간이 걸릴 수도 있겠지만, 그런 과정까지 잊게 해줄 정도로 진짜 즐거운 시간을 보내게 될 것 같아! 그리고 본인이 이미 연애를 하고 있다면, 갑자기 결혼을 하게되거나, 새로운 출발을 기대할 수 도 있을 것 같아"
          }
        }
    }

    const popup = () => {
        Alert.alert("팝업!!")
    }
    return ( 
        // ScrollView에서의 flex 숫자는 의미가 없습니다. 정확히 보여지는 화면을 몇등분 하지 않고
        // 화면에 넣은 컨텐츠를 모두 보여주려 스크롤 기능이 존재하기 때문입니다. 
        // 여기선 내부의 컨텐츠들 영역을 결정짓기 위해서 height 값과 margin,padding 값을 적절히 잘 이용해야 합니다. 
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri:tarot_data.image}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{tarot_data.name} {`(${tarot_data.kr.title} 카드)`}</Text>
                <Text style={styles.desc}>{tarot_data.kr.total}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{tarot_data.name} {`정방향 해석 총평`}</Text>
                <Text style={styles.desc}>{tarot_data.kr.up.total}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>{`나의 재물운`}{`에 대한 해석`}</Text>
                <Text style={styles.desc}>{tarot_data.kr.up.money}</Text>
            </View>
               {/* <TouchableOpacity style={styles.button} onPress={()=>popup()}><Text style={styles.buttonText}>팁 공유하기</Text></TouchableOpacity> */}
        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#000"
    },
    image:{
        height:400,
        margin:10,
        marginTop:40,
        borderRadius:20
    },
    textContainer:{
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize:25,
        fontWeight:'700',
        color:"#eee",
        alignSelf:"left"
    },
    desc:{
        fontSize:15,
        marginTop:10,
        color:"#eee"
    },
    button:{
        width:100,
        marginTop:20,
        padding:10,
        borderWidth:1,
        borderColor:'deeppink',
        borderRadius:7
    },
    buttonText:{
        color:'#fff',
        textAlign:'center'
    }
})