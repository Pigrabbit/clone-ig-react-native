/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from 'client/node_modules/@react-navigation/native';
import Toast from 'components/Toast';
import React from 'client/node_modules/react';
import { Provider } from 'client/node_modules/react-redux';
import { createStore } from 'client/node_modules/redux';
import RootTab from './src/navigators';
import { rootReducer } from './src/stores';

declare const global: { HermesInternal: null | {} };

export const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Toast />
        <RootTab />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
