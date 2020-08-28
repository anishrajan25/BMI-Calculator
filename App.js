import React, { useState } from 'react';
import {Slider, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {  Icon, Header, Button } from "react-native-elements";

const App = () => {

  const [height, setHeight] = useState(150);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(1);
  const [weight, setWeight] = useState(1);

  return(
    <View style={styles.container}>
      <Header
        backgroundColor = "#080C1E"
        placement= 'left'
        statusBarProps={{barStyle: 'light-content', backgroundColor: '#080C1E'}}
        containerStyle={{borderBottomWidth: 0, marginTop: 2}}
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
            size={55}
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
            size={55}
            name='venus'
            type='font-awesome-5'
            color='#ffffff'  
          />
          <Text style={{color: 'white', marginTop: 10}}>FEMALE</Text>
        </TouchableOpacity>
      </View>

      <View style={{...styles.inputView, flex: 3}}>
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
        <View style={{...styles.inputView, justifyContent: 'center', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style={{...styles.inputHeading, fontSize: 15}}>AGE</Text>
          </View>
          <View style={{flex: 4, justifyContent:'center'}}>
            <Text style={{...styles.text, fontSize: 48}} >{age}</Text>
          </View>
          <View style={{ flex: 3, flexDirection: 'row',justifyContent:'center', alignItems: 'center'}}>
            <View style={{flex: 4}}>
              <Icon
                raised
                reverse
                size={20}
                name='minus'
                type='font-awesome-5'
                color='#25A1CF'
                onPress={() => setAge( age===1 ? age : age-1 )}  
              />
            </View>
            <View style={{flex: 3}}>
              <Icon
                raised
                reverse
                size={20}
                name='plus'
                type='font-awesome-5'
                color='#25A1CF'  
                onPress={() => setAge( age+1 )}
              />
            </View>
          </View>
        </View>

        <View style={{...styles.inputView, justifyContent: 'center', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style={{...styles.inputHeading, fontSize: 15}}>WEIGHT</Text>
          </View>
          <View style={{flex: 4, justifyContent:'center'}}>
            <Text style={{...styles.text, fontSize: 48}} >{weight}</Text>
          </View>
          <View style={{ flex: 3, flexDirection: 'row',justifyContent:'center', alignItems: 'center'}}>
            <View style={{flex: 4}}>
              <Icon
                raised
                reverse
                size={20}
                name='minus'
                type='font-awesome-5'
                color='#25A1CF'  
                onPress={() => setWeight( weight===1 ? weight : weight-1 )} 
              />
            </View>
            <View style={{flex: 3}}>
              <Icon
                raised
                reverse
                size={20}
                name='plus'
                type='font-awesome-5'
                color='#25A1CF'  
                onPress={() => setWeight( weight+1 )}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={{flex: 2, justifyContent: 'center' }}>
        <Button
          title="Calculate BMI"
          containerStyle={{alignSelf: 'center'}}
          buttonStyle={{backgroundColor: '#25A1CF', paddingHorizontal: 30, paddingVertical: 10, borderRadius:20}}
          titleStyle={{fontSize: 18}}
          raised
        />
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