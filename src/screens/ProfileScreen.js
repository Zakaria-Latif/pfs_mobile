import React, {useContext} from 'react';
import {SafeAreaView,StyleSheet, StatusBar, Text,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from "../context/AuthContext"

const ProfileScreen = props => {
  const {logout} = useContext(AuthContext)
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar hidden={true} />
      <TouchableOpacity
      onPress={logout}
      style={{
        backgroundColor: '#222',
        padding: 15,
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 16,
          color: '#fff',
        }}>
        Log Out
      </Text>
      <Ionicons name="log-out-outline" size={22} color="#fff" />
    </TouchableOpacity>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  }
});
export default ProfileScreen;
