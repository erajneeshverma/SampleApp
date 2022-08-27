/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';

import {
    Button,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
  View,
} from 'react-native';


const Separator = () => (
  <View style={styles.separator} />
);
const TimePicker = ({navigation}) => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  return (
    <SafeAreaView style={{margin: 30}}>
      <View  style={styles.fixToText}>
        <Button title="Set Date And Time" color="#f194ff" onPress={() => setOpen(true)} />  
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <Separator />
      <Button title="StopWatch" onPress={()=>
            navigation.navigate('StopWatch')} />
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
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonstyle: {
    margin: 30,
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 500,
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default  TimePicker;
