import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
  Slider
} from 'react-native';
import {useQuery, useMutation} from '@apollo/client';
import {GET_PLAYERS} from '../../../queries/playerQueries';

import Spinner from '../../../components/Spinner';
import Error from '../../../components/Error';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlayerTab = () => {
  const [search, setSearch] = useState('');
  const [showFilter, setShowFilter] = useState(false)
  const [position, setPosition] = useState(null)
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value) => {
    setSliderValue(Math.floor(value));
  }

  const handleSearch = () => {
    console.log('Search', search);
    console.log('position', position)
    console.log('Slider',sliderValue)
  }
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
        <ScrollView style={{width: "100%"}}>
        <View style={styles.pageContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
              placeholder="Search a Player"
              style={styles.searchInput}
              value={search}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
              onChangeText={(text)=> setSearch(text)}
              />
          <TouchableOpacity
           onPress={()=> setShowFilter(!showFilter)}
          style={{ paddingHorizontal: 10 }}>
            <Icon name="filter" size={20} />
          </TouchableOpacity>
        </View>
        {showFilter && (
          <View style={styles.filterContainer}>
            <View style={styles.positionFilter}>
              <Text style={styles.positionFilterLabel}>Position:</Text>
              <Pressable  style={{ ...styles.positionFilterButton, backgroundColor: position=== 'Attack'  ? '#999' : "#ddd"}} onPress={() => {position=== 'Attack' ? setPosition(null): setPosition("Attack")}}>
                  <Text style={styles.positionFilterButtonLabel}>Attack</Text>
              </Pressable>
              <Pressable style={{ ...styles.positionFilterButton, backgroundColor: position=== 'Middle'  ? '#999' : "#ddd"}} onPress={() => {position=== 'Middle' ? setPosition(null): setPosition("Middle")}}>
                  <Text style={styles.positionFilterButtonLabel}>Middle</Text>
              </Pressable>
              <Pressable style={{ ...styles.positionFilterButton, backgroundColor: position=== 'Defense'  ? '#999' : "#ddd"}} onPress={() => {position=== 'Defense' ? setPosition(null): setPosition("Defense")}}>
                  <Text style={styles.positionFilterButtonLabel}>Defense</Text>
              </Pressable>
              <Pressable style={{ ...styles.positionFilterButton, backgroundColor: position=== 'GK'  ? '#999' : "#ddd"}} onPress={() => {position=== 'GK' ? setPosition(null): setPosition("GK")}}>
                  <Text style={styles.positionFilterButtonLabel}>GK</Text>
              </Pressable>
            </View>
            <View style={styles.positionFilter}>
              <Text style={styles.positionFilterLabel}>Min Rate: ({sliderValue})</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={100}
                  value={sliderValue}
                  minimumTrackTintColor="#222" 
                  maximumTrackTintColor="#999" 
                  thumbTintColor="#222"
                  onValueChange={handleSliderChange}
                />
            </View>
          </View>
        )

        }
          {data.players.map(player => (
            <View style={styles.card} key={player.id}>
              <View>
                {player.image ? (
                  <Image
                  source={{uri: player.image}}
                  style={styles.profilePicture}
                  />
                  ) : null}
                <View style={styles.info}>
                  <Text style={styles.name}>{player.username}</Text>
                  <View style={styles.details}>
                    <Text style={styles.position}>
                      {player.playerStatistics.position}{' '}
                    </Text>
                    <Text style={styles.fullName}>
                      {player.playerStatistics.rate}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Request</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
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
    justifyContent: 'space-between',
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
  button: {
    backgroundColor: '#222',
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchInputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderRadius: 3,
    width: '90%',
    height: 40,
    borderColor: '#999',
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10
  },
  filterContainer: {
    width: '90%',
  },
  positionFilter: {
    flexDirection: 'row',
    height: 40,
    alignItems: "flex-start",
    justifyContent: 'space-between',
  },
  positionFilterButton:{
    padding: 2,
    paddingHorizontal: 6,
    backgroundColor: '#ddd'
  },
  positionFilterButtonLabel: {
    color: "#222"
  },
  positionFilterLabel: {
    color: "#222",
    marginTop: 2,
  },
  slider: {
    marginTop: 5,
    flex: 1,
  },
});

export default PlayerTab;
