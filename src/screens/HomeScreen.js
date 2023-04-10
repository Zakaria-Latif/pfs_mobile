import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const HomeScreen = props => {
  const navigateProfile = () => {
    props.navigation.navigate('ProfileScreen');
  };

  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <Text style={{color: 'black'}}>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
