import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import store from '../store/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Greeting} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
