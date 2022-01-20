import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import AddTransaction from './components/AddTransaction';
import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{
            title: 'Home',
            headerShown: false,
          }} />
          <Stack.Screen name="AddTransaction" component={AddTransaction} options={{
            title: 'Add Transaction'
          }} />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}
