import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useQuery, useMutation} from '@apollo/client';
import {GET_PLAYER, UPDATE_PLAYER} from '../queries/playerQueries';
import {AuthContext} from '../context/AuthContext';

const ProfileScreen = props => {
  const {logout} = useContext(AuthContext);
  ///Id To Be Changed With Logged In Player Id
  const {loading, error, data} = useQuery(GET_PLAYER, {
    variables: {id: 1},
  });

  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [updatePlayer] = useMutation(UPDATE_PLAYER);

  const handleEdit = () => {
    setEditing(true);
    setUsername(data.player.username);
    setEmail(data.player.email);
  };

  const handleSave = () => {
    updatePlayer({
      variables: {
        updatePlayerInput: {
          id: 1,
          username: username,
          email: email,
        },
      },
    })
      .then(() => {
        setEditing(false);
      })
      .catch(error => {
        console.log('Error updating player:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        style={styles.image}
      />
      {editing ? (
        <>
          <View style={styles.inputContainer}>
            <Icon name="user" type="font-awesome" color="#999" size={20} />
            <TextInput
              value={username}
              onChangeText={text => setUsername(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="email" type="material" color="#999" size={20} />
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
            />
          </View>
          <Button title="Save" onPress={handleSave} />
        </>
      ) : (
        <>
          <Text style={styles.text}>
            <Icon name="user" type="font-awesome" color="#999" size={20} />
            <Text style={styles.label}> Username:</Text>{' '}
            {data?.player?.username}
          </Text>
          <Text style={styles.text}>
            <Icon name="email" type="material" color="#999" size={20} />
            <Text style={styles.label}> Email:</Text> {data?.player?.email}
          </Text>
          <Text style={styles.text}>
            <Icon name="star" type="material" color="#999" size={20} />
            <Text style={styles.label}> Rate:</Text>{' '}
            {data?.player?.playerStatistics?.rate}
          </Text>
          <Text style={styles.text}>
            <Icon
              name="gamepad"
              type="material-community"
              color="#999"
              size={20}
            />
            <Text style={styles.label}> Matches Played:</Text>{' '}
            {data?.player?.playerStatistics?.matchesNumber}
          </Text>
          <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity onPress={logout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    paddingVertical: 5,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#FDCB6E',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#F36F6F',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
export default ProfileScreen;
