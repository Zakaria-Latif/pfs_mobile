import {View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Pressable, } from 'react-native';
import { useLazyQuery} from '@apollo/client';
import {GET_MATCHS, SEARCH_MATCHES} from '../../../queries/matchQueries';
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
import {useState} from "react"
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from "@react-native-community/slider"
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useEffect} from "react"


const MatchTab = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('');
  const [showFilter, setShowFilter] = useState(false)
  const [position, setPosition] = useState(null)
  const [maxDuration, setMaxDuration] = useState(120)
  const [minDuration, setMinDuration] = useState(30)
  const [dateFrom, setDateFrom] = useState(new Date())
  const [dateTo, setDateTo] = useState(new Date())
  
  const [dateFromLabel, setDateFromLabel] = useState('From');
  const [dateToLabel, setDateToLabel] = useState('To');
  
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);

  const [GETMATCHS, {loading, error, dataMatch}] = useLazyQuery(GET_MATCHS)

  const [SEARCHMATCHES, {loadingSearch, errorSearch, dataSearch}] = useLazyQuery(SEARCH_MATCHES);

  const handleMinSliderChange = (value) => {
    setMinDuration(Math.floor(value/15)*15);
  }
  const handleMaxSliderChange = (value) => {
    setMaxDuration(Math.floor(value/15)*15);
  }

  const minutesToTime = (value) => {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    let time = ''
    if (hours) {
      time += `${hours}h`
     }
    if (minutes) {
      time += `${minutes}m`
    }
    return time;
  }

  
const handleSearch = async () => {
  console.log('Search', search);
  console.log('Min Duration', minDuration);
  console.log('Max Duration', maxDuration);
  console.log('From', dateFrom);
  console.log('To', dateTo);
  try {
    const response = await SEARCHMATCHES({
      variables: {
        searchMatchInput: {
          minDuration: minDuration,
          maxDuration: maxDuration,
          dateFrom: dateFrom,
          dateTo: dateTo,
          searchTerm: search,
        },
      },
    });
    console.log(response.data);
    setData(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getMatches = async () => {
  try {
    const response = await GETMATCHS({
      variables: {
        paginationInput: {skip: 0, take: 6},
      },
    })
    console.log(response.data);
    setData(response.data);
  } catch (error) {
    console.error(error);
  }
};

  useEffect(()=>{
    getMatches()
  }, [])


  if (loading || loadingSearch) return <Spinner />;
  if (error || errorSearch) return <Error />;

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
      <View style={styles.searchInputContainer}>
          <TextInput
              placeholder="Search a Match"
              style={styles.searchInput}
              value={search}
              onSubmitEditing={() => handleSearch()}
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
              <Text style={styles.positionFilterLabel}>Min Duration: ({minutesToTime(minDuration)})</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={30}
                  maximumValue={120}
                  value={minDuration}
                  minimumTrackTintColor="#222" 
                  maximumTrackTintColor="#999" 
                  thumbTintColor="#222"
                  onValueChange={handleMinSliderChange}
                />
            </View>
            <View style={styles.positionFilter}>
              <Text style={styles.positionFilterLabel}>Max Duration: ({minutesToTime(maxDuration)})</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={30}
                  maximumValue={120}
                  value={maxDuration}
                  minimumTrackTintColor="#222" 
                  maximumTrackTintColor="#999" 
                  thumbTintColor="#222"
                  onValueChange={handleMaxSliderChange}
                />
            </View>
            <View
              style={styles.positionFilter}>
                <Text style={styles.positionFilterLabel}>Date: </Text>
                <TouchableOpacity style={{flexDirection: "row", columnGap: 10}} onPress={() => setOpenFrom(true)}>
                  <Text style={{color: '#999'}}>
                    {dateFromLabel}
                  </Text>
                  <Ionicons
                  name="calendar-outline"
                  size={20}
                  color="#999"
                  style={{marginRight: 5}}
                  />
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={openFrom}
                    date={dateFrom}
                    mode={'date'}
                    maximumDate={new Date(Date.now())}
                    minimumDate={new Date('2023-01-01')}
                    onConfirm={date => {
                      setOpenFrom(false);
                      setDateFrom(date);
                      setDateFromLabel(date.toDateString());
                    }}
                    onCancel={() => {
                      setOpenFrom(false);
                    }}
                  />
                <TouchableOpacity style={{flexDirection: "row", columnGap: 10}} onPress={() => setOpenTo(true)}>
                  <Text style={{color: '#999'}}>
                    {dateToLabel}
                  </Text>
                  <Ionicons
                  name="calendar-outline"
                  size={20}
                  color="#999"
                  style={{marginRight: 5}}
                  />
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={openTo}
                    date={dateTo}
                    mode={'date'}
                    maximumDate={new Date(Date.now())}
                    minimumDate={new Date('2023-01-01')}
                    onConfirm={date => {
                      setOpenTo(false);
                      setDateTo(date);
                      setDateToLabel(date.toDateString());
                    }}
                    onCancel={() => {
                      setOpenTo(false);
                    }}
                  />
            </View>
          </View>
        ) }
      <FlatList
        style={styles.flatListContainer}
        data={data?.matches}
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
    width: "100%"
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

export default MatchTab;
