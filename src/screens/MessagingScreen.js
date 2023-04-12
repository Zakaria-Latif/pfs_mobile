import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const MessagingScreen = props => {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <Text style={{color: 'black'}}>Messaging</Text>
    </SafeAreaView>
  );
};

export default MessagingScreen;
