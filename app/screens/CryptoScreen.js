import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class CryptoScreen extends Component {
  static navigationOptions = {
    title: 'Prices',
    headerStyle: {
      backgroundColor: 'skyblue',
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerLeft: null,
  };

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 10,
  },
});