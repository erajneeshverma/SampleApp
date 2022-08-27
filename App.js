/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AlarmList from './components/AlarmList';
import TimePicker from './components/TimePicker';
import StopWatch from './components/StopWatch';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AlarmList"
            component={AlarmList}
            options={{title: 'Alarm App'}}
          />
          <Stack.Screen name="StopWatch" component={StopWatch} />
          <Stack.Screen name="TimePicker" component={TimePicker} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

/*

          */

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'red',
    paddingTop: 50,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    fontSize: 50,
    backgroundColor: 'yellow',
    paddingBottom: 10,
    textAlign: 'center',
  },
});

export default App;
