/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenStack from './src/routes';
import { rootReducer } from './src/stores';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

declare const global: { HermesInternal: null | {} };

export const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeScreenStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
