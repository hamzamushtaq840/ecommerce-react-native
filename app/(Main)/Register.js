import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../../components/InputField';
import Email from '../../svg/Email';
import Eye from '../../svg/Eye';
import EyeOff from '../../svg/EyeOff';
import Lock from '../../svg/Lock';
import Button from '../../components/Button';

const Register = () => {
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
          <View style={{ width: '100%', alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 22, textAlign: 'left', marginTop: 80, fontWeight: "bold", marginBottom: 32 }}>Get Started!</Text>
          </View>
          <InputField placeholder="Full name" inputStyles={{ backgroundColor: "#F4F4F5" }} onChangeText={(text) => setEmail(text)} propIcon={<TouchableWithoutFeedback onPress={togglePasswordVisibility}><View ><Email /></View></TouchableWithoutFeedback>} />
          <InputField placeholder="Email address" inputStyles={{ backgroundColor: "#F4F4F5", marginTop: 32 }} onChangeText={(text) => setEmail(text)} propIcon={<TouchableWithoutFeedback onPress={togglePasswordVisibility}><View ><Email /></View></TouchableWithoutFeedback>} />
          <InputField placeholder="Password" secureTextEntry={!showPassword} inputStyles={{ backgroundColor: "#F4F4F5", marginTop: 32 }} propIcon={<TouchableWithoutFeedback onPress={togglePasswordVisibility}><View ><Lock /></View></TouchableWithoutFeedback>} icon={<TouchableWithoutFeedback onPress={togglePasswordVisibility}><View style={{ padding: 20 }}>{showPassword ? <EyeOff /> : <Eye />}</View></TouchableWithoutFeedback>} onChangeText={(text) => setPassword(text)} />
          <InputField placeholder="Confirm password" secureTextEntry={!showPassword} inputStyles={{ backgroundColor: "#F4F4F5", marginTop: 32 }} propIcon={<TouchableWithoutFeedback onPress={togglePasswordVisibility}><View ><Lock /></View></TouchableWithoutFeedback>} icon={<TouchableWithoutFeedback onPress={togglePasswordVisibility}><View style={{ padding: 20 }}>{showPassword ? <EyeOff /> : <Eye />}</View></TouchableWithoutFeedback>} onChangeText={(text) => setPassword(text)} />
          <View style={{ width: '100%', }}>
            <Text style={{ fontSize: 13,textAlign:'center', marginTop: 8, marginBottom: 56 }}>By registering you agree to our<Text style={{ fontWeight: "600", }}> Terms and Conditions</Text></Text>
          </View>
          <Button title={"Register"} containerStyle={{ width: 182}} onPress={() => router.push("/Home")} isLoading={false}/>
          <Text onPress={() => router.push("/")} style={{ fontSize: 14, gap: 16, marginTop: 8, fontWeight: "600", marginBottom: 40 }}>Login</Text>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
            <Image source={require("../../assets/Facebook.png")} style={{ width: 40, height: 40 }} />
            <Image source={require("../../assets/Google.png")} style={{ width: 40, height: 40 }} />
            <Image source={require("../../assets/Apple.png")} style={{ width: 40, height: 40 }} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Register;