
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './components/Index';
import Two from './components/Two';
import One from './components/one';
import Main from './components/Main';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

