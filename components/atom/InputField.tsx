// components/atom/InputField.tsx
import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

interface InputFieldProps {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  errors?: any;
  secureTextEntry?: boolean;
  customClass?: string
}

const InputField = ({
  name,
  control,
  placeholder,
  rules = {},
  errors,
  secureTextEntry = false,
  customClass = 'mt-2',
}: InputFieldProps) => {
  return (
    <View className={`px-6 py-4 bg-lightGrayCustom-light border-none text-slateGray-light font-albertSans500Medium text-base rounded-full ${customClass}`}  >
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#A6A9B6"

          />
        )}
      />
      {errors?.[name] && (
        <Text className='color-red-500 ml-4'>{errors[name]?.message}</Text>
      )}
    </View>
  );
};



export default InputField;
