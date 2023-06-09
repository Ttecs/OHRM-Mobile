import {View, Text, StyleSheet, Image, BackHandler} from 'react-native';
import React from 'react';
import Footer from '../componets/Footer';
import Button from '../componets/Button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogout} from '../../store/Actions/AccountActions';

const HomeScreen = props => {
  //disable back button

  React.useEffect(() => {
    const backAction = () => {
      if (props.account_info.firstName != '') {
        return true;
      } else {
        return false;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const handleLogout = () => {
    props.userLogout();
    props.navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/playstore.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Name : {props.account_info.firstName}</Text>
          <Text style={styles.text}>Role : {props.account_info.userRole} </Text>
        </View>
        <View style={styles.textContainer2}>
          <Text style={styles.text2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry’s standard dummy text ever since
          </Text>
        </View>

        <View style={styles.LogoutContainer3}>
          <Button
            text="Logout"
            onPress={() => {
              handleLogout();
            }}
          />
        </View>
      </View>
      <Footer />
    </View>
  );
};

const mapStateToProps = state => ({
  account_info: state.account_info,
});

const mapDispatchToProps = dispatch => ({
  userLogout: bindActionCreators(userLogout, dispatch),
  //  setBearerToken: bindActionCreators(saveBearerToken, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileContainer: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#f4511e',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 15,
    color: '#000',
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
  },
  textContainer: {
    width: '95%',
    alignSelf: 'center',
    height: 100,
    backgroundColor: '#fff',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#f4511e',
    borderRadius: 10,
    padding: 10,
  },
  textContainer2: {
    width: '95%',
    alignSelf: 'center',
    height: 200,
    backgroundColor: '#fff',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#f4511e',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontSize: 15,
    color: '#000',
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
    textAlign: 'justify',
  },
  LogoutContainer3: {
    //align content to bottom and middle of the container
    width: '95%',
    height: 150,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
