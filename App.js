import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Categories from './screens/Categories';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTransaction from './components/HomeComponents/AddTransaction'
import Tabs from './navigation/tabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>

    </Provider>
  );
}
