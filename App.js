
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('pk.eyJ1IjoibG9uYXhpIiwiYSI6ImNqbzdycTI5azB5aDcza28xZ3Zwcng2c2gifQ.q5uN9EqntZpXycdITJ62JA');

export default class App extends Component {
  renderAnnotations() {
    return (
      <MapboxGL.PointAnnotation
        id='Lucas'
        coordinate={[-48.066998, -16.020427]}
      >
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <MapboxGL.Callout title='Assalto a transeunte' />
      </MapboxGL.PointAnnotation>
    )
  }

  render() {
    return (
      <MapboxGL.MapView
        showUserLocation={true}
        centerCoordinate={[-48.066998, -16.020427]}
        style={styles.container}
        styleURL={MapboxGL.StyleURL.White}
      >
      {this.renderAnnotations()}
      </MapboxGL.MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF0000',
    transform: [{ scale: 0.8 }],
  }
});