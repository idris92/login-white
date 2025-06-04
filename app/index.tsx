import CustomKeyboardView from "@/components/CustomKeyboardView";
import InputComponent from "@/components/InputComponent";
import { useBrand } from "@/context/BrandContext";
import { router } from "expo-router";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';




export default function Index() {
  const { brand } = useBrand();
  console.log('brand', process.env.EXPO_PUBLIC_API_URL)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const handleLogin=()=>{}
  return (
    <CustomKeyboardView>
          <Image source={brand.images["sign-banner"]} className='w-full h-[420px]' resizeMode='cover' />
          <View className='px-10 mt-5'>
              <Text style={{ fontFamily: brand.fonts.regular, color: brand.colors.black?.[200] }} className='text-center uppercase'>Welcome to real estate</Text>
              <Text style={{ fontFamily: brand.fonts.bold, color: brand.colors.black?.[300] }} className='text-3xl text-center mt-2'>Let Get You Closer To {"\n"} <Text style={{ color: brand.colors.primary[300] }}>Your Ideal Home</Text></Text>
             
              <View className='w-full flex flex-col gap-5 mt-5'>
      
                <InputComponent value={email} setValue={setEmail} placeholder='Enter your email...' />
                <InputComponent value={password} setValue={setPassword}  placeholder='Password' secureTextEntry={true}/>
            
              </View>
              <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: brand.colors.primary[300], shadowColor:brand.colors.zinc[300] }} className='shadow-md rounded-full w-full py-4 mt-5'>
                  <View className='flex flex-row items-center justify-center w-full'>
                    <Text style={{ fontFamily: brand.fonts.medium, color: brand.colors.white}} className='text-lg'>Sign In</Text>
                  </View>
              </TouchableOpacity>
                <TouchableOpacity onPress={()=> router.push('/')} className='flex w-full items-center justify-center flex-row mt-5'>
                          <Text style={{ fontFamily: brand.fonts.regular, color: brand.colors.black?.[200]}} className='text-md'>Dont have an account? Sign up</Text>
                </TouchableOpacity>
          </View>
      </CustomKeyboardView>
  );
}



