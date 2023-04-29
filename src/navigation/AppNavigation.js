import {NavigationContainer} from '@react-navigation/native';
import AppStack from "./AppStack"
import AuthStack from "./AuthStack"
import {AuthContext} from "../context/AuthContext"
import {useContext} from "react"
import {View, ActivityIndicator} from "react-native"

const AppNavigation = () => {
  const {isLoading, userToken } = useContext(AuthContext)

  if(isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator
         size={120}
         color="#999"
         />
      </View>
    )
  }

  return (
    <NavigationContainer>
      {userToken !== null ? 
      <AppStack/> :
      <AuthStack/>}
    </NavigationContainer>
  );
};

export default AppNavigation;
