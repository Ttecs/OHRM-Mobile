import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const SplashScreen = ({navigation}) => {
  //####################### set timeout for splash#######################
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
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

export default SplashScreen;

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
