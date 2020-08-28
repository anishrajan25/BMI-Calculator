import React, { useState } from 'react';
import {Slider, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import {  Icon, Header } from "react-native-elements";

const App = () => {

  const [height, setHeight] = useState(150);
  const [gender, setGender] = useState('');

  return(
    <View style={styles.container}>
      <Header
      backgroundColor = "#080C1E"
      placement= 'left'
      statusBarProps={{barStyle: 'light-content', backgroundColor: '#080C1E'}}
      containerStyle={{borderWidth: 0}}
      leftComponent={
        <View style={{ flex: 1 }}>
          <Text style={{color: 'white', fontSize: 20}}>BMI Calculator</Text>
          <Text style={{color: 'white', fontSize: 12}}>by anishrajan</Text>
        </View>
      }
      rightComponent={{ icon: 'info', color: '#fff' }}
    />
      
      <View style={{justifyContent: 'center', flex: 4, flexDirection: 'row'}}>
        <TouchableOpacity 
          style={{...styles.inputView, justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: gender === 'male' ? 'rgba(24,29,52,0.8)': 'rgba(24,29,52,0.3)'}}
          onPress={() => setGender(gender==='male'? '' : 'male')}
        >
          <Icon
            size={50}
            name='mars'
            type='font-awesome-5'
            color='#ffffff'  
          />
          <Text style={{color: 'white', marginTop: 10}}>MALE</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{...styles.inputView, justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: gender === 'female' ? 'rgba(24,29,52,0.8)': 'rgba(24,29,52,0.3)' }}
          onPress={() => setGender(gender==='female'? '' : 'female')}
        >
          <Icon
            size={50}
            name='venus'
            type='font-awesome-5'
            color='#ffffff'  
          />
          <Text style={{color: 'white', marginTop: 10}}>FEMALE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputHeading}>HEIGHT</Text>
        <Text style={styles.text}>{String(height) + ' cm'}</Text>
        <Slider
          thumbTintColor='#25A1CF'
          minimumTrackTintColor="#25A1CF"
          style={{alignSelf: 'stretch'}}
          thumbStyle={{ height: 20, width: 20}}
          step={1}
          minimumValue={1}
          maximumValue={300}
          onValueChange={(value) => setHeight(value)}
          value={height}
        />
      </View>
      <View style={{justifyContent: 'center', flex: 4, flexDirection: 'row'}}>
        <View style={{...styles.inputView, justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Text>AGE</Text>
        </View>
        <View style={{...styles.inputView, justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Text>WEIGHT</Text>
        </View>
      </View>
      <View style={{flex: 1 }}></View>
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
    backgroundColor: 'rgba(24,29,52,0.8)',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flex: 4
  },
  inputHeading: {
    color: "#ffffff",
    marginTop: 5,
    fontSize: 20
  }
});

export default App;

/*

<View style={{flexDirection: 'row', paddingTop: 5, paddingHorizontal: 20, flex: 1}}>
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

*/