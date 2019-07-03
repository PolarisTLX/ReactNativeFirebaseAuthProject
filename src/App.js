import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBwyOle0bzVoXS-MHZIYTsAhQCb01DadCk',
      authDomain: 'reactnativefirebaseauthproject.firebaseapp.com',
      databaseURL: 'https://reactnativefirebaseauthproject.firebaseio.com',
      projectId: 'reactnativefirebaseauthproject',
      storageBucket: '',
      messagingSenderId: '699796752165',
      appId: '1:699796752165:web:7310c5b2ce0422da'
    });
  }

  render() { 
    return ( 
      <View>
        <Header headerText='Authentication' />
        <Text>Firebase Auth App</Text>
      </View>
     );
  }
}
 
export default App;
