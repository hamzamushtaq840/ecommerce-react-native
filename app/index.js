import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../components/InputField';
import Eye from '../svg/Eye';
import EyeOff from '../svg/EyeOff';

const Login = () => {
  const router=useRouter();
  const gradientHeight = 500;
  const gradientBackground = 'purple';
  const data = Array.from({ length: gradientHeight });

  const height = Dimensions.get("window").height
  const width = Dimensions.get("window").width

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={{ flex: 1, }}>
        <SafeAreaView style={{ flex: 1,backgroundColor:'#FFFFFF' }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20, gap: 20 }}>
            {/* <Text style={{ marginTop: 20, fontSize: 35 }}>L o g i n</Text> */}

            {/* <Image source={require("../assets/Logo.png")} style={{ width: 189, height: 71 }} /> */}

            <InputField
              placeholder="Email"
              inputStyles={{ backgroundColor:"#F4F4F5" }}
              onChangeText={(text) => setEmail(text)}
            />
            <InputField
              placeholder="Password"
              secureTextEntry={!showPassword}
              inputStyles={{ backgroundColor:"#F4F4F5" }}
              icon={
                <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                  <View style={{ padding: 20 }}>
                    {showPassword ? <EyeOff /> : <Eye />}
                  </View>
                </TouchableWithoutFeedback>
              }
              contaynerStyle={{ marginBottom: 16 }}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </SafeAreaView>
    </View>
  );
};

export default Login;