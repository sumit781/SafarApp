/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './src/navigation';
import { SafeAreaProvider,useSafeAreaInsets } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store';

const App=()=>{
  return(
    <Provider store={store}>
    <SafeAreaProvider >
      <Navigation/>
    </SafeAreaProvider>
    </Provider>
  )
}
export default App;
