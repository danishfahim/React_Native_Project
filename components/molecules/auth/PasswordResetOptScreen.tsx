import ChipButton from '@/components/atom/chipButton'
import PrimaryButton from '@/components/atom/PrimaryButton'
import PageWraper from '@/components/organisms/pageWraper'
import { FORGOT_PASSWORD, VERIFY_OTP } from '@/constants/appRoute'
import { images } from '@/constants/images'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const PasswordResetOptScreen = () => {
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

        <View className="h-40" />
        {/* <View className="h-48" /> */}
        {/* <View className="h-16" /> */}


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
          <Text className='font-albertSans700Bold  text-[28px] text-baseDark-light mb-8 mt-7'>Password Recovery</Text>
          <Text className='font-albertSans300Light  text-[19px]   text-baseDark-light mb-6 mx-10 text-center'>How you would like to restore your password?</Text>

          <View>
            <ChipButton
              title="SMS"
              handleClick={() => router.push(FORGOT_PASSWORD)}
              customClass=" p-4 bg-lavenderBlue-light font-albertSans700Bold text-brightBlue-light px-24"
              textClass='font-albertSans700Bold text-brightBlue-light '
            />
            <View className='h-3' />
            <ChipButton
              title="Email"
              handleClick={() => router.push(FORGOT_PASSWORD)}
              customClass="p-4 bg-lightRed-light  px-24"
              textClass='font-albertSans700Bold text-softPink-light'
            />
          </View>
        </View>

        <View className='mt-24' />

        <PrimaryButton title="Let's get started" customClass='mx-5 mt-10 ' handleClick={() => router.push(VERIFY_OTP)} />
        <TouchableOpacity className='items-center mt-2'>
          <Text>
            cancel
          </Text>
        </TouchableOpacity>
      </View>
    </PageWraper>
  )
}

export default PasswordResetOptScreen