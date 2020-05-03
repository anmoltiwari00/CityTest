import React, { Component } from 'react';
import { Provider} from 'react-redux';
import store from './Store';
import RootNavigator from './RootNavigator';
import { BackHandler } from 'react-native';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
