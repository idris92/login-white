import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useBrand } from '@/context/BrandContext';
import { useAuth } from '@/context/authContext';

const Home = () => {
    const { brand } = useBrand();
    const {logout} = useAuth()

    const handleLogout=async ()=>{
        await logout()
    }
  return (
    <View className='item-center justify-center'>
      <Text style={{ fontFamily: brand.fonts.regular, color: brand.colors.black?.[200] }} className='text-center uppercase'>Welcome to ${process.env.EXPO_PUBLIC_APP_NAME}</Text>
      <TouchableOpacity onPress={handleLogout}>
            <Text style={{ fontFamily: brand.fonts.regular, color: brand.colors.black?.[200]}} className='text-md'>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home