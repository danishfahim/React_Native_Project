import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


interface ChipProp {
    title: string;
    onPress?: () => void;
    customClass?: string
}


const OtpOption = ({ title, customClass, onPress }: ChipProp) => {
    return (
        <TouchableOpacity onPress={onPress} className={`py-4 items-center my-3 rounded-2xl  bg-primary-light ${customClass}`}>
            <View className=''>
                <Text className='text-lightGray-light font-albertSans300Light'>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default OtpOption