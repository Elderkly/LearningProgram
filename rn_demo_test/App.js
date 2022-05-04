/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {TouchableOpacity, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
function Home({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#eee'}}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('My', {id: 123})}>
        <Text>跳转</Text>
      </TouchableOpacity>
    </View>
  );
}

function My({route, navigation}) {
  const {id} = route.params ? route.params : 0;
  const [num, setNum] = useState(10);
  console.log(id);
  useEffect(() => {
    console.log(`num:${num}`);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#eee'}}>
      <Text>{num}</Text>
      <TouchableOpacity onPress={() => setNum(num + 1)}>
        <Text>change</Text>
      </TouchableOpacity>
    </View>
  );
}

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Home'} component={Home} options={{title: 'AAA'}} />
        <Tab.Screen name={'My'} component={My} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
