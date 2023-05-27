import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {getToken} from '../../api/LoginApis';
import {saveBearerToken} from '../../store/Actions/AccountActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const SplashScreen = props => {
  const callback = (data, flag, error) => {
    if (flag == true) {
      console.log('######### Bear token ############', data);
      props.setBearerToken(data);
    }
  };

  //####################### set timeout for splash#######################
  React.useEffect(() => {
    getToken(callback);
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 3000);
  }, []);
  //####################### set timeout for splash#######################

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/playstore.png')}
      />
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setBearerToken: bindActionCreators(saveBearerToken, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
  },
});
