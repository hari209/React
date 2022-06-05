import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/components/Home";
import ListAnswer from "./src/components/ListAnswer";
import  DeThi  from "./src/components/DeThi";
import MeoThi from "./src/components/MeoThi";
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Ứng dụng ôn thi bằng lái" component={Home}/>
        <Stack.Screen name="Ôn tập lý thuyết" component={ListAnswer}/>
        <Stack.Screen name="Bộ đề" component={DeThi}/>
        <Stack.Screen name="Mẹo Thi" component={MeoThi}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}