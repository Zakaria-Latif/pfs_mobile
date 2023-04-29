import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {useQuery} from '@apollo/client';
import {LOG_IN} from "../queries/authQueries"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => { 
  const [userToken, setUserToken] = useState(null)
  const [isLoading, setIsLoading] = useState(false)



  const login = (username, password) => {

    
    // const {loading, error, data} = useQuery(LOG_IN, {
    //   variables: {
    //     loginInput: {username: username, password: password},
    //     },
    // });

    // if (loading) return setIsLoading(true)
    // if (error) {
    //   console.warn('Error', error);
    // }

    // AsyncStorage.setItem("userToken", data.token)
    setUserToken("dhfskjfd")
    setIsLoading(false)
  }

  const logout = () => {
    setIsLoading(true)
    setUserToken(null)
    AsyncStorage.removeItem("userToken")
    setIsLoading(false)
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true)
      const value = await AsyncStorage.getItem("userToken")
      setIsLoading(false)
      setUserToken(value)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    isLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  )
}

