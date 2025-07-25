import IconLable from '@/components/atom/IconLable'
import SecureCodeInput from '@/components/atom/SecureCodeInput'
import PageWraper from '@/components/organisms/pageWraper'
import { PASSWORD } from '@/constants/appRoute'
import { Colors } from '@/constants/Colors'
import { Icons_Library } from '@/constants/IconsLibrary'
import { IconsName } from '@/constants/iconsName'
import { images } from '@/constants/images'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const SecureAppScreen = () => {
    return (
        <PageWraper>
            <View className=' '>
                <Image
                    source={images.ICEBLUE}
                    style={{
                        width: 260,
                        height: 290,
                        top: -40,
                        left: -20,
                        position: "absolute",
                    }}
                    className="  mt-3.5"
                />

                <Image
                    source={images.ROYALBUBLE}
                    style={{
                        width: 210,
                        height: 230,
                        top: -40,
                        left: -20,
                        position: "absolute",
                    }}
                    className="  mt-3.5 "
                />

                <View className="h-40" />
                {/* <View className="h-48" /> */}
                {/* <View className="h-16" /> */}
                <View className="">
                </View>

                <View className='items-center '>
                    <Image
                        source={images.PROFILE}
                        style={{
                            width: 106,
                            height: 106,
                            borderRadius: 200
                        }}
                        className=" mt-3.5  rounded-full mb-56"
                    />
                    <Text className='font-albertSans700Bold  text-[28px] text-baseDark-light mb-8 mt-7'>Hello, Romina!!</Text>
                    <Text className='font-albertSans300Light text-[19px] text-baseDark-light mb-6'>Type your password</Text>
                    <View className='mx-20'>
                        <SecureCodeInput />
                    </View>


                    {/* <PrimaryButton title="Sign Up" handleClick={() => router.push(FORGOT_PASSWORD)} customClass="mt-8" /> */}
                    <View className='h-72' />
                    <TouchableOpacity onPress={() => router.push(PASSWORD)} className="items-center mx-auto flex-row gap-4">
                        <Text>Not You?</Text>
                        <IconLable
                            type={Icons_Library.AntDesign}
                            name={IconsName.ARROW_RIGHT}
                            color={Colors.light.text}
                            size={15}
                            customClass='bg-primary-light rounded-full p-2 '
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </PageWraper>
    )
}

export default SecureAppScreen