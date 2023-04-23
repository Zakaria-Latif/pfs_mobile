import {View, StyleSheet, Text} from 'react-native';

const Error = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.text}>Something Went Wrong</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#ededed',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
});

export default Error;
