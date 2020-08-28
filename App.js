import React, { useState } from 'react';
import { StyleSheet, Text, View, Slider, StatusBar } from 'react-native';
import { Icon } from "react-native-elements";

const App = () => {

  const [height, setHeight] = useState(150);

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#080C1E" />
      <View style={{flexDirection: 'row', height: 50, paddingTop: 5, paddingHorizontal: 20}}>
        <View style={{ flex: 9}}>
          <Text style={{color: 'white', fontSize: 20}}>BMI Calculator</Text>
          <Text style={{color: 'white', fontSize: 12}}>by anishrajan</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon
            size={20}
            name='info-circle'
            type='font-awesome-5'
            color='#ffffff'  
          />
        </View>
      </View>
      <View style={{justifyContent: 'center', flex: 1}}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 5,
    fontSize: 20
  }
});

export default App;