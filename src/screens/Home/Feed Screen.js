import React, {useState} from 'react';
import {SafeAreaView, View, StatusBar, Text, StyleSheet, Pressable} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MatchTab from "./Feed Tabs/MatchTab"
import PlayerTab from "./Feed Tabs/PlayerTab"

const FeedScreen = props => {
  
  const [activeScreen, setActiveScreen] = useState('MATCH');
  
  const color = '#999';
  const activeColor = '#222';

  return (
    <View style={styles.root}>
          <View style={styles.pageContainer}>
            <View style={styles.topNavigation}>
              <Pressable style={styles.button} onPress={() => setActiveScreen('MATCH')}>
                <Ionicons
                  name={activeScreen === 'MATCH' ? "football" : "football-outline"}
                  size={25}
                  color={activeScreen === 'MATCH' ? activeColor : color}
                />
                <Text style={{...styles.buttonText, color: activeScreen === 'MATCH' ? activeColor : color,}}>Match</Text>
              </Pressable>

              <Pressable style={styles.button} onPress={() => setActiveScreen('PLAYER')}>
                <MaterialCommunityIcons
                  name={activeScreen === 'PLAYER' ? "star-four-points"  : "star-four-points-outline"}
                  size={25}
                  color={activeScreen === 'PLAYER' ? activeColor : color}
                  />
                  <Text style={{...styles.buttonText, color: activeScreen === 'PLAYER' ? activeColor : color,}}>Player</Text>
              </Pressable>
            </View>

            {activeScreen === 'MATCH' && <MatchTab />}
            {activeScreen === 'PLAYER' && <PlayerTab />}
          </View>
        </View>
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
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  root: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  button: {
    alignItems: 'center',
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default FeedScreen;