import * as Progress from 'react-native-progress';
import {View, StyleSheet} from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.pageContainer}>
      <Progress.CircleSnail
        size={100}
        thickness={8}
        color={['#222', '#222']}
        indeterminate={true}
      />
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
});

export default Spinner;
