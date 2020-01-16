import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './config/ReactotromConfig'

import { store, persistor } from './store'

import Routes from './routes'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="#fff" backgroundColor="#2d3a4b" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
