import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      // Initialize Firebase
      apiKey: 'AIzaSyA6L-4pJAk4TtkhYdQgAMp-bVINiOpucVQ',
      authDomain: 'karang-de4ff.firebaseapp.com',
      databaseURL: 'https://karang-de4ff.firebaseio.com',
      projectId: 'karang-de4ff',
      storageBucket: 'karang-de4ff.appspot.com',
      messagingSenderId: '70468451656'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }

}

export default App;
