import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {useQuery, useMutation} from '@apollo/client';
import {GET_PLAYERS} from '../../../queries/playerQueries';

import Spinner from '../../../components/Spinner';
import Error from '../../../components/Error';

const PlayerTab = () => {
  const {loading, error, data} = useQuery(GET_PLAYERS, {
    // onCompleted: data => {
    //   console.warn('Player', data);
    // },
    variables: {
      paginationInput: {skip: 0, take: 10},
    },
  });

  if (loading) return <Spinner />;
  if (error) {
    console.warn('Error', error);
    return <Error />;
  }

  return (
    <>
      {!loading && !error && (
        <View style={styles.pageContainer}>
          {data.players.map(player => (
            <View style={styles.card} key={player.id}>
              {player.image ?  (<Image
                source={{uri: player.image}}
                style={styles.profilePicture}
              />):  null }
              <View style={styles.info}>
                <Text style={styles.name}>{player.username}</Text>
                <View style={styles.details}>
                  <Text style={styles.position}>{player.playerStatistics.position} </Text>
                  <Text style={styles.fullName}>{player.playerStatistics.rate}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  card: {
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    width: '90%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  position: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'light',
  },
  rate: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'medium',
  },
});

export default PlayerTab;
