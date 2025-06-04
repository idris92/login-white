import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

interface props{
  size: number;
}

const Loading = ({size}:props) => {
  return (
    <View className={` flex justify-center items-center ${size}`}>
       <ActivityIndicator size={size}/>
    </View>
  )
}

export default Loading