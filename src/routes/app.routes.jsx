import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Friends from '../pages/Friends';
import Inbox from '../pages/Inbox';
import Me from '../pages/Me';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Me" component={Me} />
    </Tab.Navigator>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={AppRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
