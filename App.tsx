import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from './src/reduxes/store';
import {ActivityIndicator, View} from 'react-native';
import AuthNavigator from './src/navigations/AuthNavigator';
const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        setIsLoggedIn(!!token); // true if token exists
      } catch (err) {
        console.log('Error checking token', err);
        setIsLoggedIn(false);
      }
    };
    checkToken();
  }, []);

  if (isLoggedIn === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
