import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { deThi } from "../../utils/constants";

export default function DeThi({ navigation }) {
    const [data, setData] = useState(deThi)
    
    return (
        <ScrollView>
        {
            data.map(item => <View key={item.idDeThi}>
                <TouchableOpacity style={styleDeThi.btnDeThi} onPress={() => navigation.navigate("Ôn tập lý thuyết")} title="next" >
                    {/* <Image style={styleHomes.imgBtnHome} source={require('../Home/Images/meo.png')}></Image> */}
                    <Text style={{ fontSize: 30, paddingBottom: 70, }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
            )
        }
        </ScrollView>
    )
}

const styleDeThi = StyleSheet.create({
    btnDeThi: {
        width: "100%",
        height: 200,
        backgroundColor: "#fff",
        textAlign: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "#636363",
        
    },
    imgBtnHome: {
        width: 150,
        height: 150
    },
});