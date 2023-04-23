import React from 'react';
import {SafeAreaView, View ,StatusBar, Text,  StyleSheet} from 'react-native';


const MyMatchesScreen = props => {
  const navigateProfile = () => {
    props.navigation.navigate('ProfileScreen');
  };

  return (
    <View style={styles.sectionContainer}>
      <StatusBar hidden={true} />
      <Text style={{color: 'black'}}>My Matches</Text>
    </View>
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

export default MyMatchesScreen;