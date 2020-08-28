import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

const App = () => {

  const [height, setHeight] = useState(150);

  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <Text style={styles.inputHeading}>Height</Text>
        <Text style={styles.text}>{String(height) + ' cm'}</Text>
        <Slider
          thumbTintColor='#25A1CF'
          minimumTrackTintColor="#25A1CF"
          style={{marginVertical: 10}}
          step={1}
          maximumValue={300}
          onValueChange={(value) => setHeight(value)}
          value={height}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: "#080C1E"
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    marginVertical: 5
  },
  inputView: {
    backgroundColor: 'rgba(24,29,52,0.5)',
    margin: 10,
    padding: 10,
    borderRadius: 15
  },
  inputHeading: {
    color: "#ffffff",
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 20
  }
});

export default App;