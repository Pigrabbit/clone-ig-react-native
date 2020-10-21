/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeScreenStack from './src/routes'

declare const global: { HermesInternal: null | {} }

const App = () => {
  return (
    <NavigationContainer>
      <HomeScreenStack />
    </NavigationContainer>
  )
}

export default App
