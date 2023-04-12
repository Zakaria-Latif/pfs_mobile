import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const NotificationScreen = props => {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <Text style={{color: 'black'}}>Notification</Text>
    </SafeAreaView>
  );
};

export default NotificationScreen;
