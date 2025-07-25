import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface BtnProps {
  title: string;
  handleClick?: () => void;
  customClass?: string;
  textClass?: string;
}

const ChipButton = ({ title, customClass,textClass = '', handleClick }: BtnProps) => {
  return (
    <TouchableOpacity onPress={handleClick}>
      <View
        className={`items-center py-4 rounded-2xl font-albertSans300Light text-base text-baseDark-light ${customClass || 'bg-lightRed-light'}`}
      >
        <Text className={`${ textClass||'text-lightGray-light font-albertSans300Light'}`}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChipButton;
