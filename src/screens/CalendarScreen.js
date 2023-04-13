import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const CalendarScreen = props => {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <Text style={{color: 'black'}}>Calendar</Text>
    </SafeAreaView>
  );
};

export default CalendarScreen;
