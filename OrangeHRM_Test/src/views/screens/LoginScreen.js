import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Footer from '../componets/Footer';
import Button from '../componets/Button';
import {handleLogin} from '../../api/LoginApis';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogin} from '../../store/Actions/AccountActions';
import Lottie from 'lottie-react-native';

const LoginScreen = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showLoading, setShowLoading] = React.useState(false);

  const callback = (data, flag, error) => {
    if (flag == true) {
      props.getUserLogin(data);
      setShowLoading(false);
      props.navigation.navigate('home');
    } else {
      console.log('###### reroor########', error);
      setShowLoading(false);
      Alert.alert('Login Failed', error);
    }
  };

  const handleSubmit = () => {
    if (username != '' && password != '') {
      setShowLoading(true);
      handleLogin(username, password, props.account_info.token, callback);
    } else {
      Alert.alert('Login Failed', 'Please enter username and password');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      {showLoading ? (
        <View style={style.loadingContainer}>
          <Lottie
            style={style.loading}
            source={require('../../assets/images/145114-loader.json')}
            autoPlay
            loop
          />
        </View>
      ) : null}
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
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                'Instagram',
                'What went wrong:A problem occurred evaluating project :react-native-community_cookies : need time to fix this :-(',
              )
            }>
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
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  account_info: state.account_info,
});

const mapDispatchToProps = dispatch => ({
  getUserLogin: bindActionCreators(userLogin, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const style = StyleSheet.create({
  loading: {
    width: 100,
    height: 100,
  },
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
  loadingContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
