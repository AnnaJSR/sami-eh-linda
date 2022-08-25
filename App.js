import * as React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';
import { Header } from './components/Header.js';
import { Body } from './components/Body.js';
import { Footer } from './components/Footer.js';

export default class App extends React.Component() {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Header></Header>
        </View>
        <View>
          <Body></Body>
        </View>
        <View>
          <Footer></Footer>
        </View>
      </ScrollView>
    );
  }

  Botao() {
    return <Button title="Clique Aqui"></Button>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
  },
});
