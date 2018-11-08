import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import AppWithNavigationState from './navigation';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
