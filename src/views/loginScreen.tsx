import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  logo: {
    height: 100,
    width: '100%',
    marginBottom: 40
  },
  text: {
    fontSize: 40,
    padding: 40,
    textAlign: 'center',
  },
  buttonContent: {
    height: 60,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#01bebe',
    marginTop: 10,
  }
});

export default class HomeScreen extends Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login Screen</Text>
        <Button icon='exit-to-app'
          onPress={() => { this.props.navigation.navigate('Home') }}
          mode='contained'
          style={styles.button}
          contentStyle={styles.buttonContent}>Fake Login To Home Screen</Button>
      </View>
    );
  }
}