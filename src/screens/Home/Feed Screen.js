import React from 'react';
import {SafeAreaView, View, StatusBar, Text, StyleSheet} from 'react-native';

const FeedScreen = props => {

  return (
    <View style={styles.sectionContainer}>
      <StatusBar hidden={true}  />
      <Text style={{color: 'black'}}>Feed </Text>
    </View >
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

export default FeedScreen;