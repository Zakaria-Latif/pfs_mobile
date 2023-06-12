import React, {useState} from 'react';
import {SafeAreaView,StyleSheet, StatusBar, Text, TouchableOpacity, TextInput, View} from 'react-native';

const CalendarScreen = props => {
  // const [location, setLocation] = useState('');
  // const [time, setTime] = useState('');
  // const [numberOfPlayers, setNumberOfPlayers] = useState(8);
  // const [duration, setDuration] = useState('');

  // const createMatch = () => {
  //   console.log(location, time, numberOfPlayers, duration);

  // }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar hidden={true} />
      {/* <View style={styles.textInputContainer}>
          <TextInput
              placeholder="Location"
              style={styles.textInput}
              value={location}
              onChangeText={(text)=> setLocation(text)}
            />
      </View>
      <View style={styles.textInputContainer}>
      <TextInput
              placeholder="Time"
              style={styles.textInput}
              value={time}
              onChangeText={(text)=> setTime(text)}
            />
      </View>
      <View style={styles.textInputContainer}>
      <TextInput
              placeholder="Number of Players"
              style={styles.textInput}
              value={numberOfPlayers}
              onChangeText={(text)=> setNumberOfPlayers(text)}
              keyboardType="numeric"
            />
      </View>
      <View style={styles.textInputContainer}>
      <TextInput
              placeholder="Duration"
              style={styles.textInput}
              value={duration}
              onChangeText={(text)=> setDuration(text)}
            />
      </View>
      <View >
      <TouchableOpacity onPress={()=> createMatch()} style={styles.button}>
            <Text style={styles.buttonText}>Create Match</Text>
          </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  textInputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderRadius: 3,
    height: 40,
    width: '90%',
    borderColor: '#999',
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    padding: 10
  },
  button: {
    backgroundColor: '#222',
    borderRadius: 4,
    padding: 8,
    marginVertical: 10,
    width: 370,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: "center"
  },
});


export default CalendarScreen;
