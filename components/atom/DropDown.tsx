import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

type data = {
    lable: string
    value: string
    icon: string | number
}

interface InputFieldProps {
    name: string;
    control: any;
    placeholder?: string;
    rules?: object;
    errors?: any;
    secureTextEntry?: boolean;
    option: data[]
}

const DropdownComponent = ({
    name,
    control,
    placeholder,
    rules = {},
    errors,
    secureTextEntry = false,
    option
}: InputFieldProps) => {
    const [selectedValue, setSelectedValue] = useState("eng");
    const selectedItem = option.find(item => item.value === selectedValue);

    const renderItem = (item: any) => (
        <View style={styles.item}>
            <Image source={item.icon} style={styles.flagIcon} />
            {item.value === selectedValue && (
                <AntDesign name="check" size={18} color="green" />
            )}
        </View>
    );

    return (
        <View>
            <View style={styles.container} className='b bg-lightGrayCustom-light px-1'>
                {/* Dropdown (Only Flag Shown) */}
                <Dropdown
                    style={styles.dropdown}
                    placeholder=""
                    data={option}
                    labelField="label"
                    valueField="value"
                    value={selectedValue}
                    maxHeight={300}
                    onChange={item => setSelectedValue(item.value)}
                    renderLeftIcon={() =>
                        selectedItem ? (
                            <Image source={selectedItem.icon} style={styles.flagIcon} />
                        ) : null
                    }
                    renderItem={renderItem}
                    placeholderStyle={styles.hiddenText}
                    selectedTextStyle={styles.hiddenText}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                />

                {/* Phone Number Input */}
                <Controller
                    control={control}
                    name={name}
                    rules={rules}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder={placeholder || 'Enter number'}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={secureTextEntry}
                            className={`px-6 py-4 bg-lightGrayCustom-light border-none text-slateGray-light font-albertSans500Medium text-base rounded-full`}
                            placeholderTextColor="#A6A9B6"
                            keyboardType="phone-pad"
                        />
                    )}
                />
            </View>
            {errors?.[name] && (
                <Text className='ml-4 color-red-500'>{errors[name]?.message}</Text>
            )}
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 60,
    },
    dropdown: {
        // margin: 10,
        marginLeft: 4,
        borderRightWidth: 1,
        height: 23,
        borderColor: '#1F1F1F',
        width: 63,
        // borderRadius: 8,
        paddingHorizontal: 7,
        justifyContent: 'center',
    },
    hiddenText: {
        color: 'transparent',
        height: 0,
        width: 0,
    },
    iconStyle: {
        width: 16,
        height: 16,
    },
    item: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flagIcon: {
        width: 28,
        height: 20,
        borderRadius: 4,
    },

    inputSearchStyle: {
        height: 40,
        fontSize: 14,
    },
});
