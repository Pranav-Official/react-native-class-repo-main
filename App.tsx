/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import ButtonComponent from './src/componet/Button';

const TextInputExample = () => {
  return (
    <SafeAreaView
      style={{
        padding: 24,
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
      }}>
      <TextInput
        style={styles.input}
        placeholder="email"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        keyboardType="numeric"
      />
      <Text
        style={{
          color: 'red',
          fontWeight: 'bold',
          marginTop: 30,
          marginBottom: 20,
        }}>
        forgot password
      </Text>
      <ButtonComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 0,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;
