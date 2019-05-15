// Initial loading screen that pulls the content from the redux store and checks the initial state of the token

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class LoadingScreen extends Component<any, any> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('RouteAuthStack')
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
          <ActivityIndicator animating={true} size='large' color='red' />
      </View>
    );
  }
}

export default LoadingScreen;
