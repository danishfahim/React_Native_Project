import React from 'react';
import { View } from 'react-native';



interface IconLabelProps {
    name: string,
    size: number,
    color: string
    customClass?: string
    type: React.ComponentType<any>;
}

const IconLable = ({ color, size, name, customClass = 'bg-primary-light', type: Icon, }: IconLabelProps) => {


    return (
        <View className={`items-center  first-letter: -light rounded-full   ${customClass}`}  >
            <Icon name={name} color={color} size={size} />
        </View>
    )
}

export default IconLable