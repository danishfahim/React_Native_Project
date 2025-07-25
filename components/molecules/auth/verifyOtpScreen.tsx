import PrimaryButton from '@/components/atom/PrimaryButton'
import SecureCodeInput from '@/components/atom/SecureCodeInput'
import PageWraper from '@/components/organisms/pageWraper'
import { RESET_PASSWORD, VERIFY_OTP } from '@/constants/appRoute'
import { images } from '@/constants/images'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const VerifyOtpScreen = () => {
  return (



    <PageWraper>
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

      <View className="h-52" />
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
        <View className='items-center mx-4'>
          <Text className='font-albertSans700Bold  text-[28px] text-baseDark-light mb-8 mt-7'>
            Hello, Romina!!
          </Text>
          <Text className='font-albertSans300Light  text-center text-[19px] text-baseDark-light  '>
            Enter 4-digits code we sent you on your phone number
          </Text>
          <Text className='font-albertSans700Bold  text-center text-base text-baseDark-light  mt-5'>
            +92*******00
          </Text>
        </View>
        <View className='h-6' />
        <SecureCodeInput
          numberOfDigits={4}
          placeholder='****'
          secureTextEntry={false} onChangeText={() => console.log('i am text')}
        />
        <TouchableOpacity className="items-center mt-6">
          <TouchableOpacity onPress={() => router.push(VERIFY_OTP)}>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <PrimaryButton
        title="Send Again"
        handleClick={() => router.push(RESET_PASSWORD)}
        customClass="mt-8"
        bgColor='bg-pinkPrimary-light'
      />
      <TouchableOpacity>
        <Text className='text-center mt-8 font-albertSans300Light text-base'>cancel</Text>
      </TouchableOpacity>
    </PageWraper>

  )
}

export default VerifyOtpScreen






