import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeNavigation from '../screens/Home/HomeNavigation';
import CalendarScreen from '../screens/CalendarScreen';
import MessagingScreen from '../screens/MessagingScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

const homeName = 'Home';
const calendarName = 'Calendar';
const messagingName = 'Messaging';
const notificationName = 'Notification';
const profileName = 'profile';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            
            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === calendarName) {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (rn === messagingName) {
              iconName = focused
                ? 'message-processing'
                : 'message-processing-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else if (rn === notificationName) {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'user' : 'user-o';
              return <FontAwesome name={iconName} size={size} color={color} />;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarStyle: {
            padding: 10,
            height: 65,
          },
          tabBarActiveTintColor: '#222',
          tabBarInactiveTintColor: '#999',
          headerShown: false,
        })}>
        <Tab.Screen name={homeName} component={HomeNavigation} />
        <Tab.Screen name={calendarName} component={CalendarScreen} />
        <Tab.Screen name={messagingName} component={MessagingScreen} />
        <Tab.Screen name={notificationName} component={NotificationScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
  );
};

export default AppStack;
