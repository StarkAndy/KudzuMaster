import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const LoginPage = ({navigation}) => {
  return (
    <View>
      <Text>Login Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Test Login Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
