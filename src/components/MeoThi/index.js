import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { meoThi } from "../../utils/constants";

export default function DeThi({ navigation }) {
  const [data, setData] = useState(meoThi)
  console.log(data)
  return (
    <View style={styleMeoThi.container}>
      <StatusBar style="auto" />
      <View></View>
      {
        data && data.length > 0 ?
          <View style={styleMeoThi.wapperMain}>
            <FlatList
              style={{ flex: 9 }}
              nestedScrollEnabled={true}
              data={data}
              renderItem={({ item, index }) =>
                <View style={{ marginTop: 10, backgroundColor: 'white', width: '100%', padding: 10 }}>
                  <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Mẹo số {item.idmeoThi}: {item.name}</Text>

                  <View>
                    <View key={item.idmeoThi}>
                      {
                        item.arrMeoThi.map(l =>
                          <Text style={{ fontSize: 16, paddingTop: 10,lineHeight:30 }}>- {l} </Text>)
                      }
                    </View>
                  </View>
                </View>
              }
              keyExtractor={item => item.idmeoThi}
            />
          </View>
          :
          <View>
            <Text>Ko co data</Text>
          </View>
      }

    </View>
  )
}

const styleMeoThi = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 0,
    backgroundColor: '#b6b6b6',
    width: '100%',
    flex: 1
  },
  wapperMain: {
    backgroundColor: 'white', width: '100%', padding: 10, flex: 1, flexDirection: 'row'
  },
});