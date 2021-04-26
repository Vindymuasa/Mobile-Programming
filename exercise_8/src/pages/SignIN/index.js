/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../components/Atoms/TextInput';
import Gap from '../../components/Atoms/Gap';
import Button from '../../components/Atoms/Button1';
import Button1 from '../../components/Atoms/Button2';

const SignIN = () => {
  return (
  <View>
    <Text>Sign In Pages</Text>
  </View>
  );
};

export default SignIN;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 30,
  },
  title: {
    fontSize: 23,
    fontWeight: '500',
    lineHeight: 32,
  },
});
