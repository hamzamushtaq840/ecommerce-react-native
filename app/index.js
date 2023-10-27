import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Email from '../svg/Email';
import { FONTS } from './../constants/theme'
import Eye from '../svg/Eye';
import EyeOff from '../svg/EyeOff';
import Lock from '../svg/Lock';

const Login = () => {
  const router = useRouter();
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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
          <Image source={require("../assets/Logo.png")} style={{ width: 96, height: 96 }} />
          <View style={{ width: '100%', alignItems: 'flex-start' }}>
            <Text style={{ ...FONTS['500'], lineHeight: 28, fontSize: 22, textAlign: 'left', marginTop: 80, marginBottom: 32 }}>Welcome back!</Text>
          </View>
          <InputField placeholder="Email address" inputStyles={{ backgroundColor: "#F4F4F5" }} onChangeText={(text) => setEmail(text)} propIcon={<TouchableWithoutFeedback onPress={togglePasswordVisibility}><View ><Email /></View></TouchableWithoutFeedback>} />
          <InputField placeholder="Password" secureTextEntry={!showPassword} inputStyles={{ backgroundColor: "#F4F4F5", marginTop: 32 }} propIcon={<TouchableWithoutFeedback onPress={togglePasswordVisibility}><View ><Lock /></View></TouchableWithoutFeedback>} icon={<TouchableWithoutFeedback onPress={togglePasswordVisibility}><View style={{ padding: 20 }}>{showPassword ? <EyeOff /> : <Eye />}</View></TouchableWithoutFeedback>} onChangeText={(text) => setPassword(text)} />
          <View style={{ width: '100%', alignItems: 'flex-end' }}>
            <Text style={{ ...FONTS['400'], fontSize: 14, textAlign: 'right', marginBottom: 32, color: '#959597' }}>Forgot your password?</Text>
          </View>
          <Button title={"Login"} containerStyle={{ width: 182, marginTop: 64 }} onPress={() => router.push("/Home")} isLoading={false} />
          <Text onPress={() => router.push("/Register")} style={{ fontSize: 14, gap: 16, marginTop: 8, marginBottom: 40, ...FONTS['700'] }}>Register</Text>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
            <Image source={require("../assets/Facebook.png")} style={{ width: 40, height: 40 }} />
            <Image source={require("../assets/Google.png")} style={{ width: 40, height: 40 }} />
            <Image source={require("../assets/Apple.png")} style={{ width: 40, height: 40 }} />
          </View>
        </View>
      </SafeAreaView >
    </View >
  );
};

export default Login;