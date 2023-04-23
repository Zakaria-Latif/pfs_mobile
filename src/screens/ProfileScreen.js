import React from 'react';
import {SafeAreaView,StyleSheet, StatusBar, Text} from 'react-native';

const ProfileScreen = props => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar hidden={true} />
      <Text style={{color: 'black'}}>Profile</Text>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  }
});
export default ProfileScreen;
