import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FeedScreen from "./Feed Screen"
import MyMatchesScreen from "./My Matches Screen"

const TopTab = createMaterialTopTabNavigator();

const HomeNavigation = () => {
  return (
    <TopTab.Navigator 
    screenOptions={{
      tabBarIndicatorStyle: {color: "powderblue",backgroundColor: '#222' },
      tabBarActiveTintColor: '#222',
      tabBarInactiveTintColor: '#999',
      tabBarLabelStyle: { fontSize: 12, textTransform: "none"},
    }}
    >
      <TopTab.Screen name="Feed" component={FeedScreen} />
      <TopTab.Screen name="My Matches" component={MyMatchesScreen} />
    </TopTab.Navigator>
  );
};

export default HomeNavigation;
