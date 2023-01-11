import React, {useState, useEffect} from 'react';
import {ScrollView, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';

const initState = {
  action: 'openMenu',
};
const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case 'OPEN_MENU':
      return {action: 'openMenu'};
    case 'CLOSE_MENU':
      return {action: 'closeMenu'};
  }
  return state;
};
const store = createStore(reducer);
const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
