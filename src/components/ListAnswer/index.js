import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, Image,  Alert, Modal,Pressable, TouchableOpacity } from 'react-native';
import CheckboxGroup from 'react-native-checkbox-group';
import { isEqual } from 'lodash';
import { cauhoi, typeCauhoi } from "../../utils/constants";

export default function ListAnswer({ navigation }) {

  const [data, setData] = useState([])
  const [answer, setAnswer] = useState([])
  const [checkKq, setCheckKq] = useState(false)
  const [showModal, setshowModal] = useState(false)
  

  useEffect(() => {
    // getData()
    setData(cauhoi)
  }, [])


  const handleCheck = (item, selected) => {
    setAnswer({
      ...answer,
      [item.socauhoi]: isEqual(item.dapan.sort(), selected.sort())
    })
  }
  const getAnswer = (nameCauhoi) => answer[nameCauhoi] || false

  const getResult = () => {
    return data.reduce((count,c) => {
      return getAnswer(c.socauhoi) ? ++count : count
    },0)
  }

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setshowModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Số đáp án đúng: {getResult()}</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setshowModal(false)}
            >
              <Text style={styles.textStyle}>Xem lại đề</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* {data ?
        <View>
          {data.map((item) => {
            return <Text key={item.id}>{item.titleQuesmain}</Text>
          })}
        </View>
        :
        <View>
          <Text>No data</Text>
        </View>
      } */}
      {
        data && data.length > 0 ?
          <View style={styles.wapperMain}>
            <FlatList
              style={{flex: 9}}
              nestedScrollEnabled={true}
              data={data}
              renderItem={({ item, index }) =>
                <View style={{ marginTop: 10, backgroundColor: 'white', width: '100%', padding: 10 }}>
                  <Text style={{ fontSize: 17 }}>Câu {item.id}: {item.cauhoi}</Text>
                  {
                    item.img ? <Image style={{width:null,height:250,flex:1 }} source={{uri:item.img}}></Image> : null
                  }
                  <CheckboxGroup
                    callback={(selected) => handleCheck(item, selected)}
                    iconColor={"#333"}
                    iconSize={35}
                    checkedIcon="ios-checkbox-outline"
                    uncheckedIcon="ios-square-outline"
                    checkboxes={item.arrDapan}
                    labelStyle={{
                      color: '#333',
                      fontSize: 15,
                      marginLeft: 10,
                      marginRight: 10,
                      padding: 5
                    }}
                    rowStyle={{
                      flexDirection: 'row'
                    }}
                    rowDirection={"column"}
                  />
                  {
                    checkKq &&
                    <View >
                      <Text style={{ color: getAnswer(item.socauhoi) ? "green" : "red" }}> {  getAnswer(item.socauhoi) ? "Đáp án đúng" : "Đáp án sai" }</Text>
                      {/* <Text > {item.meo}</Text> */}
                    </View>
                  }

                </View>
              }
              keyExtractor={item => item.id}
            />
          </View>
          :
          <View>
            <Text>Koco data</Text>
          </View>
      }
      <Button  title="Nộp bài" onPress={() => {setCheckKq(true); setshowModal(true)}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 0,
    backgroundColor: '#b6b6b6',
    width: '100%',
    flex: 1
  },
  wapperMain: {
    backgroundColor: 'white', width: '100%', padding: 10,flex: 1,flexDirection:'row'
  },
  checkbox: {
    alignSelf: "center",
  },
  buttonMenu: {
    marginRight: 10,
    backgroundColor: 'blue',
    width: 250,
    height: 250,
    borderRadius: 20,
    marginLeft: 30,
  },
  textIn: {
    flex: 5,
    fontSize: 20, color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding:100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontWeight: "bold",
    fontSize:20,
    textAlign: "center"
  }
});