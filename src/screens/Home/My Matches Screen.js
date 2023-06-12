import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';

import {useQuery} from '@apollo/client';
import {GET_MY_MATCHS} from '../../queries/matchQueries';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faFutbol,
  faUser,
  faMapMarkerAlt,
  faClock,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

const MyMatchesScreen = props => {
  const {loading, error, data} = useQuery(GET_MY_MATCHS, {
    variables: {
      paginationInput: {skip: 0, take: 6},
    },
  });

  // const data = [{
  //   id: 1,
  //   name: "John Doe",
  //   time: "2021-05-20T12:00:00.000Z",
  //   location: "Cairo",
  //   playersNumber: 10,
  //   creator: {
  //     id: 1,
  //     username: "John Doe",
  //   }
  // }]

  if (loading) return <Spinner />;
  if (error) return <Error />;

  const render = ({item}) => {
    const monthDay = item.time.toString().substring(5, 10);
    const hourMinute = item.time.toString().substring(11, 16);

    return (
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View style={styles.element}>
            <FontAwesomeIcon style={styles.icon} icon={faFutbol} />
            <Text style={styles.cardCreator}>Football</Text>
          </View>
          <TouchableOpacity style={styles.buttonMain}>
            <Text style={styles.buttonText}>
              View Members ({item.playersNumber})
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardMiddle}>
          <View style={styles.timeLocation}>
            <FontAwesomeIcon style={styles.icon} icon={faClock} />
            <Text style={styles.cardTime}>
              {monthDay + '  '}
              {hourMinute}
            </Text>
          </View>
          <View style={styles.timeLocation}>
            <FontAwesomeIcon style={styles.icon} icon={faMapMarkerAlt} />
            <Text style={styles.cardLocation}>{item.location}</Text>
          </View>
        </View>
        <View style={styles.cardBottom}>
          <View style={styles.element}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.element}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.element}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.element}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListContainer}
        data={data.myMatches}
        renderItem={render}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 15,
  },
  flatListContainer: {
    width: '90%',
  },
  card: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    elevation: 5,
    padding: 16,
    marginBottom: 16,
    flex: 1,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    flex: 1,
  },
  icon: {
    marginRight: 8,
    color: '#333',
  },
  buttonMain: {
    backgroundColor: '#222',
    borderRadius: 4,
    padding: 8,
  },
  button: {
    backgroundColor: '#222',
    borderRadius: 4,
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardMiddle: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTime: {
    marginLeft: 8,
    marginRight: 16,
    color: '#333',
  },
  cardLocation: {
    color: '#333',
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  element: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardPlayers: {
    marginLeft: 8,
    marginRight: 16,
    color: '#333',
  },
  cardCreator: {
    color: '#333',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    height: 40,
    width: '90%',
    borderColor: '#999',
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  filterContainer: {
    width: '90%',
  },
  positionFilter: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  positionFilterButton: {
    padding: 2,
    paddingHorizontal: 6,
    backgroundColor: '#ddd',
  },
  positionFilterButtonLabel: {
    color: '#222',
  },
  positionFilterLabel: {
    color: '#222',
    marginTop: 2,
  },
  slider: {
    marginTop: 5,
    flex: 1,
  },
});

export default MyMatchesScreen;
