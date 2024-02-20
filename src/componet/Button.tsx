import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonComponent = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
});

export default ButtonComponent;
