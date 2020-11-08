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
import HomeScreenStack from './src/navigators';
import { rootReducer } from './src/stores';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import RootTab from './src/navigators';

declare const global: { HermesInternal: null | {} };

export const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootTab />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
