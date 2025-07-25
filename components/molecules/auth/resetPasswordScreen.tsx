import InputField from "@/components/atom/InputField"
import PrimaryButton from '@/components/atom/PrimaryButton'
import PageWraper from '@/components/organisms/pageWraper'
import { FORGOT_PASSWORD, PASSWORD_RESET_OpTION } from '@/constants/appRoute'
import { images } from '@/constants/images'
import { router } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const ResetPasswordScreen = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    return (
        <PageWraper>
            <View className=' '>
                <Image
                    source={images.ROYALBUBLE5}
                    style={{

                        width: 300,
                        height: 180,
                        top: -40,
                        right: -20,
                        position: "absolute",
                    }}
                    className="  mt-3.5"
                />

                <Image
                    source={images.ROYALBUBLE3}
                    style={{
                        width: 210,
                        height: 130,
                        top: -40,
                        right: -20,
                        position: "absolute",
                    }}
                    className="  mt-3.5 "
                />

                <View className="h-32" />


                <View className='items-center '>
                    <Image
                        source={images.PROFILE}
                        style={{
                            width: 106,
                            height: 106,
                            borderRadius: 200
                        }}
                        className=" mt-3.5  rounded-full "
                    />
                    <Text className='font-albertSans700Bold  text-xl text-baseDark-light mb-1 mt-5'>Setup New Password</Text>
                    <Text className='font-albertSans300Light text-lg text-baseDark-light mb-6 mx-7 text-center'>Please, setup a new password for your account</Text>
                </View>
                <InputField
                    name="password"
                    control={control}
                    placeholder="New Password"
                    secureTextEntry
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Minimum 6 characters required",
                        },
                    }}
                    errors={errors}
                    customClass="mt-3 mx-5 rounded-lg py-2 "
                />
                <InputField
                    name="password"
                    control={control}
                    placeholder="Enter password"
                    secureTextEntry
                    rules={{
                        required: "Repeat Password",
                        minLength: {
                            value: 6,
                            message: "Minimum 6 characters required",
                        },
                    }}
                    errors={errors}
                    customClass="mt-3 mx-5 rounded-lg py-2"
                />

                <View className="h-36" />

                <PrimaryButton title="Save" handleClick={() => router.push(FORGOT_PASSWORD)} customClass="mx-6 rounded-xl" />
                <View className='h-6' />
                <TouchableOpacity onPress={() => router.push(PASSWORD_RESET_OpTION)} className="items-center mx-auto">
                    <Text className='rounded-'>Cancel</Text>
                </TouchableOpacity>
            </View>
        </PageWraper>
    )
}

export default ResetPasswordScreen



























