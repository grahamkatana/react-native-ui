import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Request from '../screens/Request';
import Settings from '../screens/Settings';
const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator  screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
          },
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
        }}>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name="Request" component={Request} options={{ headerShown: true }} />
          <Stack.Screen name="Settings" component={Settings} options={{ headerShown: true }} />

        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation