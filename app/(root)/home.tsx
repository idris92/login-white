import { useAuth } from '@/context/authContext';
import { useBrand } from '@/context/BrandContext';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


const Home = () => {
    const { brand } = useBrand();
    const {logout} = useAuth()

    const handleLogout=async ()=>{
        await logout()
    }
  return (
    <View className='flex flex-1 item-center justify-center'>
      <Text style={{ fontFamily: brand.fonts.regular, color: brand.colors.black?.[200] }} className='text-center uppercase'>Welcome to {process.env.EXPO_PUBLIC_APP_NAME}</Text>
      <TouchableOpacity onPress={handleLogout} className=' flex items-center justify-center'>
            <Text style={{ fontFamily: brand.fonts.regular, color: brand.colors.primary?.[300]}} className='text-md'>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home