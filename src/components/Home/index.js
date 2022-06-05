import React from 'react'
import { View, Text, Button,Image,StyleSheet,TouchableOpacity } from 'react-native'


const Home = ({ navigation }) => {
    return (
        <View>
            <Image
            style={styleHomes.imghome}
             source={
                require('../Home/Images/logo9f6c7914-7.png')}></Image>
            
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styleHomes.btnHome} onPress={() => navigation.navigate("ListAnswer")} title="next">
                <Image style={styleHomes.imgBtnHome} source={require('../Home/Images/thi.png')}></Image>
                <Text style={{fontSize:20,paddingBottom:20}}>Thi Sát Hạch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleHomes.btnHome} onPress={() => navigation.navigate("Ôn tập lý thuyết")} title="next">
            <Image style={styleHomes.imgBtnHome} source={require('../Home/Images/ontap.png')}></Image>
                <Text style={{fontSize:20,paddingBottom:20}}>Học Lý Thuyết</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleHomes.btnHome} onPress={() => navigation.navigate("ListAnswer")} title="next">
            <Image style={styleHomes.imgBtnHome} source={require('../Home/Images/causai.png')}></Image>
                <Text style={{fontSize:20,paddingBottom:20}}>Các Câu Hay Sai</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styleHomes.btnHome} onPress={() => navigation.navigate("Mẹo Thi")} title="next">
            <Image style={styleHomes.imgBtnHome} source={require('../Home/Images/meo.png')}></Image>
                <Text style={{fontSize:20,paddingBottom:20}}>Mẹo Thi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleHomes.btnHome} onPress={() => navigation.navigate("Bộ đề")} title="next">
            <Image style={styleHomes.imgBtnHome} source={require('../Home/Images/dethi.png')}></Image>
                <Text style={{fontSize:20,paddingBottom:20}}>Thi theo bộ đề</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleHomes.btnHome} onPress={() => navigation.navigate("ListAnswer")} title="next">
            <Image style={styleHomes.imgBtnHome} source={require('../Home/Images/luat.png')}></Image>
                <Text style={{fontSize:20,paddingBottom:20}}>Tra cứu luật nhanh</Text>
            </TouchableOpacity>
            </View>    
            <Image
            style={styleHomes.imgHdu}
             source={
                require('../Home/Images/hdu.png')}></Image>
        </View>
    )
}
const styleHomes = StyleSheet.create({
 imghome: {
    width: 600,
    height: 300,
 },
 btnHome: {
    width:200,
    height:200,
    backgroundColor:"#fff",
    textAlign:'center',
    justifyContent:'flex-end',
    alignItems: 'center',
    borderWidth:  0.5,
    borderColor: "#DFDFDE",
    
 },
 imgBtnHome:{
     width:150,
     height:150
 },
 imgHdu:{
     width:600,
     height:150,
     marginTop:110

 }
});

export default Home