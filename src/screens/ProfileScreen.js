import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const ProfileScreen = props => {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <Text style={{color: 'black'}}>Profile</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
