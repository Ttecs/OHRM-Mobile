import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = props => {
  return (
    <View style={style.buttonContainer1}>
      <TouchableOpacity
        onPress={() => {
          props.onPress();
        }}
        style={style.buttonContainer}>
        <Text style={style.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const style = {
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    height: 50,
    backgroundColor: '#f4511e',
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContainer1: {
    width: '50%',
    alignSelf: 'center',
    height: 50,
    backgroundColor: '#f4511e',
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
};
