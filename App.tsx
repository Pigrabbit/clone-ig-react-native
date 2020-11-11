/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootTab from './src/navigators';
import { rootReducer } from './src/stores';

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
