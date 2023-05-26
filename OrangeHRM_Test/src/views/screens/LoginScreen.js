import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Footer from '../componets/Footer';
import Button from '../componets/Button';
import {handleLogin} from '../../api/LoginApis';

const LoginScreen = ({navigation}) => {
  const onClear = () => {};
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isFocused, setIsFocused] = React.useState(false);
  const [isFocused2, setIsFocused2] = React.useState(false);

  const handleFocus = () => setIsFocused(true);

  const callback = data => {
    console.log(data);
  };

  const handleSubmit = () => {
    if (username != '' && password != '') {
      handleLogin(username, password, callback);
    }
    // if (true) {
    //   console.log('success');
    //   navigation.navigate('home');
    // } else {
    //   console.log('fail');
    // }
  };
  console.log(username);
  console.log(password);
  return (
    <View style={style.container}>
      <View style={style.loginContainer}>
        <Text style={style.loginText}>Get Start ! Login Now</Text>
        <View style={style.inputContainer}>
          <Text style={style.inputText}>Username</Text>
          <TextInput
            style={style.input}
            placeholder="uom.itfac"
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={style.inputContainer}>
          <Text style={style.inputText}>Password</Text>
          <TextInput
            style={style.input2}
            placeholder="password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <Button
          onPress={() => {
            handleSubmit();
          }}
          text="Login"
        />

        <Text style={style.orText}>-- or --</Text>
        <View style={style.instagramContainer}>
          <TouchableOpacity onPress={() => insRef.current.show()}>
            <Image
              style={style.instagramImage}
              source={require('../../assets/images/icons8-instagram-400.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={style.footerContainer}>
          <Footer />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loginContainer: {
    width: '90%',
    height: '70%',
  },
  inputContainer: {
    width: '100%',

    height: 100,
    backgroundColor: '#fff',

    marginTop: 10,
  },
  loginText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  inputText: {
    fontSize: 15,
    paddingBottom: 10,
    color: '#000',
  },
  input: {
    fontSize: 15,
    width: '100%',
    alignSelf: 'center',
    color: '#000',
    borderColor: '#f4511e',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    textDecorationLine: 'none',
  },
  input2: {
    fontSize: 15,
    width: '100%',
    alignSelf: 'center',
    color: '#000',
    borderColor: '#f4511e',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    height: 50,
    backgroundColor: '#f4511e',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  orText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    textAlign: 'center',
  },
  instagramContainer: {
    width: '100%',
    alignSelf: 'center',
    height: 200,
  },
  instagramImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
  },
  anotherText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    textAlign: 'center',
  },
  footerContainer: {
    width: '100%',
    alignSelf: 'center',
    height: '30%',
    marginTop: 20,
  },

  footerText: {
    fontSize: 15,

    color: 'grey',
    marginTop: 2,
    textAlign: 'center',
  },
});
