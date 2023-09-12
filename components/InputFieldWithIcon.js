import React, { useState } from 'react';
import { View, TextInput, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import Eye from './../svg/Eye'; // Import your Eye.svg here

const InputFieldWithIcon = ({ placeholder, onChangeText }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.inputContainer}>
      <EyeIcon showPassword={showPassword} onPress={togglePasswordVisibility} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        style={styles.input}
        onChangeText={onChangeText}
      />
      <EyeIcon showPassword={showPassword} onPress={togglePasswordVisibility} />
    </View>
  );
};

const EyeIcon = ({ showPassword, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.iconContainer}>
        {showPassword ? <EyeOff /> : <Eye />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#F4F4F5',
    borderBottomWidth: 1,
    marginBottom: 16,
    backgroundColor: '#F4F4F5',
  },
  input: {
    flex: 1,
    padding: 10,
  },
  iconContainer: {
    padding: 10,
  },
});

export default InputFieldWithIcon;