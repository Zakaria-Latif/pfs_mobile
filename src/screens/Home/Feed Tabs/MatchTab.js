import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_MATCHS} from '../../../queries/matchQueries';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faFutbol,
  faUser,
  faMapMarkerAlt,
  faClock,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../../components/Spinner';
import Error from '../../../components/Error';

const MatchTab = () => {
  const {loading, error, data} = useQuery(GET_MATCHS, {
    variables: {
      paginationInput: {skip: 0, take: 6},
    },
  });

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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Request</Text>
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
            <FontAwesomeIcon style={styles.icon} icon={faUser} />
            <Text style={styles.cardCreator}>{item.name}</Text>
          </View>
          <View style={styles.element}>
            <FontAwesomeIcon style={styles.icon} icon={faUsers} />
            <Text style={styles.cardPlayers}>{item.playersNumber}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.matches}
        renderItem={render}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  card: {
    backgroundColor: '#ddd',
    borderRadius: 12,
    elevation: 5,
    padding: 16,
    marginBottom: 16,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
    color: '#333',
  },
  button: {
    backgroundColor: '#222',
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardMiddle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 8,
    marginHorizontal: 90,
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
});

export default MatchTab;
