import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Footer from '../componets/Footer';
import Button from '../componets/Button';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/playstore.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Name : ITFAC</Text>
          <Text style={styles.text}>Email : email#email.com </Text>
        </View>
        <View style={styles.textContainer2}>
          <Text style={styles.text2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry’s standard dummy text ever since
          </Text>
        </View>

        <View style={styles.LogoutContainer3}>
          <Button text="Logout" />
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default HomeScreen;

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
