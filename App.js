import React, { useState } from 'react';
import {Slider, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';
import {  Icon, Header, Button, Avatar } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const App = () => {

  const [height, setHeight] = useState(150);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(50);
  const [visible, setVisible] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [bmi, setBmi] = useState((weight/Math.pow(height/100,2)).toFixed(2));

  const toggleModal = () => {
    setVisible(!visible);
  };

  const toggleInfoModal = () => {
    setInfoModal(!infoModal);
  };

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
        rightComponent={
          <Icon 
            iconStyle={{paddingRight: 5}}
            size={25}
            name='info-circle'
            type='font-awesome-5'
            color='#ffffff' 
            onPress={toggleInfoModal}
          />
        }
      />

      <Modal
        animationType="slide"
        visible={infoModal}
        transparent={true}
        onRequestClose={toggleInfoModal}
      >
        <View style={{...styles.container, justifyContent: 'center', alignContent: 'center', marginTop: 'auto'}}>
          <View style={{...styles.inputView, margin: 30, marginVertical: 100, paddingHorizontal: 20}}>
            <Avatar rounded source={ require('./assets/IMG-20180921-WA0019-01.jpeg')} size='xlarge' />
            <View style={{flex: 4, justifyContent: 'center', alignContent: 'center'}}>
              <Text style={{  color: 'white', fontSize: 15, margin: 5, textAlign: 'center', paddingTop: 30 }}>One of the first few apps I made while on my journey to learn React Native</Text>

            </View>
            <View style={{flex: 10, justifyContent: 'center', alignContent: 'center'}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, margin: 5 }}>You can find the whole source code on github.com/anishrajan25</Text>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, margin: 5, fontWeight: 'bold' }}>Made by Anish Rajan</Text>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, margin: 5 }}>A passionate learner and obsessive seeker of IT knowledge</Text>

            </View>
            <View style={{flex: 3, justifyContent: 'center', alignContent: 'center'}}>
              <Button
                title="Go Back"
                containerStyle={{alignSelf: 'center'}}
                buttonStyle={{backgroundColor: '#25A1CF', paddingHorizontal: 30, paddingVertical: 10, borderRadius:20}}
                titleStyle={{fontSize: 18}}
                raised
                onPress={toggleInfoModal}
              />

            </View>
          </View>
        </View>
      </Modal>
      
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
          onPress={toggleModal}
        />
        <Modal
          animationType="slide"
          visible={visible}
          transparent={true}
          onRequestClose={toggleModal}
        >
          <View style={{...styles.container, justifyContent: 'center', alignContent: 'center', marginTop: 60}}>
            <View style={{...styles.inputView, margin: 30, marginVertical: 50}}>
              <View style={{flex: 2, justifyContent: 'center', alignContent: 'center'}}>
                <Text style={{  color: 'white', fontSize: 25 }}>Analysis Complete</Text>

              </View>
              <View style={{flex: 9, justifyContent: 'center', alignContent: 'center'}}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, margin: 5 }}>Your Body Mass Index Is</Text>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 50, margin: 5, fontWeight: 'bold' }}>{bmi}</Text>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, margin: 5 }}>You are Normal</Text>

              </View>
              <View style={{flex: 3, justifyContent: 'center', alignContent: 'center'}}>
                <Button
                  title="Calculate Another"
                  containerStyle={{alignSelf: 'center'}}
                  buttonStyle={{backgroundColor: '#25A1CF', paddingHorizontal: 30, paddingVertical: 10, borderRadius:20}}
                  titleStyle={{fontSize: 18}}
                  raised
                  onPress={toggleModal}
                />

              </View>
            </View>
          </View>
      </Modal>
        
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



<Overlay 
          isVisible={visible} 
          onBackdropPress={toggleOverlay}
          overlayStyle={{backgroundColor: 'rgba(52,100,158,1)', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}
        >
          <Animatable.View animation='slideInUp' duration={1000} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>Analysis Complete</Text>
            <Text>Your Body Mass Index Is</Text>
            <Text>24.5</Text>
            <Text>You are Normal</Text>
          </Animatable.View>
        </Overlay>
*/