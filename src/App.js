import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import AsyncStorage from '@react-native-community/async-storage';

class App extends Component {

  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });        
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() { 
    return ( 
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
     );
  }
}
 
export default App;
