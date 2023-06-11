import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authLink = setContext(async (_, {headers}) => {
  // Get the token from storage
  const token = await AsyncStorage.getItem('userToken');
  // Add the token to the headers if it exists
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
