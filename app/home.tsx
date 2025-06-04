import { View, Text } from 'react-native'
import React from 'react'
import { useBrand } from '@/context/BrandContext';

const Home = () => {
    const { brand } = useBrand();
  return (
    <View className='item-center justify-center'>
      <Text style={{ fontFamily: brand.fonts.regular, color: brand.colors.black?.[200] }} className='text-center uppercase'>Welcome to ${process.env.EXPO_PUBLIC_APP_NAME}</Text>
    </View>
  )
}

export default Home