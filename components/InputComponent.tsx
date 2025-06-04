import { useBrand } from '@/context/BrandContext';
import React from 'react';
import { TextInput, View } from 'react-native';

interface props{
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
    secureTextEntry?: boolean;
}

const InputComponent = ({value, setValue, secureTextEntry, placeholder}:props) => {
  const { brand } = useBrand();
  return (
    <View style={{backgroundColor:brand.colors.black?.[50], borderColor:brand.colors.black[50] }} className='w-full rounded-lg border  p-1.5'>
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => setValue(text)}
            secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

export default InputComponent