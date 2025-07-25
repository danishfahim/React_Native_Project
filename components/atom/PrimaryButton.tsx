import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface BtnProps {
    title: string;
    handleClick?: () => void;
    customClass?: string
    bgColor?: string;
}

const PrimaryButton = ({ title, customClass, bgColor, handleClick }: BtnProps) => {
    return (
        <TouchableOpacity onPress={handleClick} className={` dark:text-lightGray-light  text-base text-baseDark-light font-albertSans300Light py-4   rounded-2xl ${bgColor || 'bg-primary-light'} ${customClass}`} >
            <View className='items-center '>
                <Text className='text-lightGray-light font-albertSans300Light'>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default PrimaryButton;
