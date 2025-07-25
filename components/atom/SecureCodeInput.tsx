import React from 'react';
import { View } from 'react-native';
import { OtpInput } from "react-native-otp-entry";

interface SecureDataProp {
    numberOfDigits: number;
    placeholder: string;
    secureTextEntry: boolean;
    onChangeText: (value: string) => void;
    gap?: number; // optional prop for gap between inputs
}

const SecureCodeInput = ({
    numberOfDigits,
    placeholder,
    secureTextEntry,
    onChangeText,
    gap = 5, // default gap between inputs
}: SecureDataProp) => {
    return (
        <View className='w-full items-center justify-center'
        >
            <OtpInput
                numberOfDigits={numberOfDigits}
                onTextChange={onChangeText}
                focusColor="#84cc16"
                autoFocus={false}
                hideStick={true}
                placeholder={placeholder}
                blurOnFilled={true}
                disabled={false}
                type="numeric"
                secureTextEntry={secureTextEntry}
                theme={{
                    containerStyle: {
                        width: 'auto', // important to remove full screen spread
                        flexDirection: 'row',
                    },
                    pinCodeContainerStyle: {
                        width: 30,
                        height: 40,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: '#d4d4d4',
                        marginHorizontal: gap, // ✅ ZERO GAP
                        paddingHorizontal: 0,
                    },
                    pinCodeTextStyle: {
                        color: '#71717a',
                        fontSize: 18,
                    },
                }}
            />
        </View>
    );
};

export default SecureCodeInput;