/* eslint-disable prettier/prettier */
import React from "react";

import {
    Button,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
  View,
} from 'react-native';

const AlarmList = ({navigation}) => {
  return(
    <SafeAreaView>
      <View>
        <Pressable>
          <Text style={styles.highlight} >02:45 PM</Text>
        </Pressable>
    </View>
    <View>
        <Text style={styles.highlight}>02:45 PM</Text>
    </View>
    <View>
        <Text style={styles.highlight}>02:45 PM</Text>
    </View>
    <View>
        <Text style={styles.highlight}>02:45 PM</Text>
    </View>
    <View>
        <Text style={styles.highlight}>02:45 PM</Text>
</View>
<View>
        <Text style={styles.highlight}>02:45 PM</Text>
    </View>
    <View style={styles.fixToText}>
    <Button title="SET ALARM" color= '#000000'  onPress={()=>
            navigation.navigate('TimePicker')} />
    </View>
    
    </SafeAreaView>
    
  );
};

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
  fixToText: {
    height: 40,
    margin: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  highlight: {
    fontWeight: '700',
    fontSize: 50,
    backgroundColor: 'red',
    paddingBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  heading: {
    fontWeight: '700',
    fontSize: 50,
    backgroundColor: 'yellow',
    paddingBottom: 10,
    textAlign: 'center',
  },
  buttonbottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});

export default AlarmList; 