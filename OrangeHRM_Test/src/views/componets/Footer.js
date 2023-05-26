import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View>
      <Text style={style.footerText}>All rights reseved</Text>
      <Text style={style.footerText}>Powered by ITFAC</Text>
    </View>
  );
};

export default Footer;

const style = StyleSheet.create({
  footerText: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
});
