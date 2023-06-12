import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery, useMutation, useLazyQuery} from '@apollo/client';
import {LOG_IN} from '../queries/authQueries';
import {SIGN_UP} from '../mutations/AuthMutations';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [LOGIN, {loadingLogIn, errorLogIn, dataLogIn}] = useLazyQuery(LOG_IN);
  const [SIGNUP, {loadingSignUp, errorSignUp, dataSignUp}] =
    useMutation(SIGN_UP);

  const login = async (username, password) => {
    setIsLoading(true);

    try {
      const response = await LOGIN({
        variables: {
          loginInput: {username: username, password: password},
        },
      });
      //console.log('response', response);
      console.log(response.data);
      AsyncStorage.setItem('userToken', response.data.accessToken);
      setUserToken(response.data.signup.accessToken);
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      return false;
    }
    /*AsyncStorage.setItem(
      'userToken',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikt5cmEiLCJzdWIiOjEsImlhdCI6MTY4NjUxMTAwNywiZXhwIjoxNjg2NTk3NDA3fQ.1KH9Ew_hoCDHCih0ZkFftQVOP7fVqTZqF66CuoVIF9s',
    );
    setUserToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikt5cmEiLCJzdWIiOjEsImlhdCI6MTY4NjUxMTAwNywiZXhwIjoxNjg2NTk3NDA3fQ.1KH9Ew_hoCDHCih0ZkFftQVOP7fVqTZqF66CuoVIF9s',
    );
    setIsLoading(false);*/
  };

  const signup = async (email, username, password) => {
    console.log('clicked', email, username, password);
    setIsLoading(true);
    try {
      const response = await SIGNUP({
        variables: {
          signUpInput: {
            username: username,
            password: password,
            email: email,
          },
        },
      });
      console.log('response', response);
      AsyncStorage.setItem('userToken', response.data.signup.accessToken);
      setUserToken(response.data.signup.accessToken);
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const value = await AsyncStorage.getItem('userToken');
      setIsLoading(false);
      setUserToken(value);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{signup, login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
