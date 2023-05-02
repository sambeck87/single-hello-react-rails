import React from 'react'
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import store from '../store/index';

function App() {
  return (
    <Provider store={store}>
      <Greeting />
    </Provider>
  );
}

export default App
