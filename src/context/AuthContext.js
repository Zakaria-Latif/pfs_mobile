import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useQuery, useMutation, useLazyQuery} from '@apollo/client';
import {LOG_IN} from '../queries/authQueries';
import {SIGN_UP} from '../mutations/authMutations';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [LOGIN, {loadingLogIn, errorLogIn, dataLogIn}] = useLazyQuery(LOG_IN);
  const [SIGNUP, {loadingSignUp, errorSignUp, dataSignUp}] =
    useMutation(SIGN_UP);

  const login = async (username, password) => {
    /*setIsLoading(true);

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
    }*/
    setUserToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJzdWIiOjEyLCJpYXQiOjE2ODQ0OTk5MjEsImV4cCI6MTY4NDU4NjMyMX0.VUkrqQj1LdukuYmuUZZ4bvvQw5RmHrc4qwrczrDVYdE',
    );
    setIsLoading(false);
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
