import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class MainComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.home}>Home Page</Text>
      </View>
    );
  }
}

export default MainComponent;
