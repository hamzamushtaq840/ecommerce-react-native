import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
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
          <View style={{ flex: 1, alignItems:'center', justifyContent:'center', paddingHorizontal: 20, gap: 20 }}>

            <Image source={require("../assets/Logo.png")} style={{ width: 96, height: 96 }} />
            <View style={{width:'100%', alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 18, textAlign: 'left',marginTop:10,fontWeight:"bold" }}>Welcome back!</Text>
          </View>
            <InputField
              placeholder="Email address"
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
             <Button
              title={"Login"}
              containerStyle={{width:182,marginTop:20 }}
              // onPress={() => loginHandler()}
              onPress={() => router.push("/home")}
              isLoading={false}
            />
          </View>
        </SafeAreaView>
    </View>
  );
};

export default Login;