import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessagingScreen from './MessagingScreen';
import ChatViewScreen from './ChatViewScreen';

const Stack = createNativeStackNavigator();

function MessagingNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MessagingScreen" component={MessagingScreen} />
      <Stack.Screen name="ChatViewScreen" component={ChatViewScreen} />
    </Stack.Navigator>
  );
}

export default MessagingNavigation;