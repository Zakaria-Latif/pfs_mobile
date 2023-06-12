import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useMutation} from '@apollo/client';
import {CREATE_MATCH_MUTATION} from '../queries/matchQueries';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import Toast from 'react-native-toast-message';

const AddMatchForm = () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [time, setTime] = useState(new Date());
  const [playersNumber, setPlayersNumber] = useState('');
  const [duration, setDuration] = useState('');
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const [addMatch, {loading, error}] = useMutation(CREATE_MATCH_MUTATION);

  const handleSubmit = () => {
    const createMatchInput = {
      location: location,
      name: name,
      time: time,
      prize: '',
      playersNumber: parseInt(playersNumber),
      duration: parseInt(duration),
    };

    addMatch({
      variables: {createMatchInput: createMatchInput},
    })
      .then(response => {
        Toast.show({
          type: 'success',
          text1: 'Match added',
          text2: 'The match has been successfully added.',
        });

        navigation.navigate('My Matches');
      })
      .catch(error => {
        console.error('Error adding match:', error);
      });
  };

  const handleDateTimeChange = selectedDateTime => {
    setShowDateTimePicker(false);
    setTime(selectedDateTime || time);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Date and Time"
        value={time.toLocaleString()}
        onFocus={() => setShowDateTimePicker(true)}
      />
      {showDateTimePicker && (
        <DatePicker
          date={time}
          mode="datetime"
          is24hour={true}
          onDateChange={handleDateTimeChange}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Players Number"
        value={playersNumber}
        onChangeText={setPlayersNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Duration in Hours"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Match</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#333333',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddMatchForm;
