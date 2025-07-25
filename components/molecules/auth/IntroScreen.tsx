import IconLable from '@/components/atom/IconLable'
import PrimaryButton from '@/components/atom/PrimaryButton'
import PageWraper from '@/components/organisms/pageWraper'
import { SIGNUP } from '@/constants/appRoute'
import { Colors } from '@/constants/Colors'
import { Icons_Library } from '@/constants/IconsLibrary'
import { IconsName } from '@/constants/iconsName'
import { images } from '@/constants/images'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'



const IntroScreen = () => {

    return (
        <PageWraper>
            <View className='h-48' />
            <View className='w-36 h-36 bg-[#FFFFFF] items-center rounded-full mx-auto'>
                <Image
                    source={images.SHOPPING_CART}
                    style={{ width: 80, height: 92 }}
                    className=" rounded-[14px] mt-3.5"
                />
            </View>
            <View>
                <Text className='text-baseDark-light dark:text-baseDark-dark font-albertSans700Bold text-[52px] mx-auto'>
                    Shoppe
                </Text>
                <View className='h-5' />
                <Text className='mx-11 text-center  text-baseDark-light dark:text-baseDark-dark font-albertSans300Light text-[19px]'>
                    Beautiful eCommerce UI Kit for your online store
                </Text>
            </View>
            <View className='h-[106px]' />
            <PrimaryButton title="Let's get started" customClass='mx-5' handleClick={() => router.push(SIGNUP)} />
            <View className='flex-row items-center justify-center gap-4 mt-4 '>
                <Text className='text-baseDark-light dark:text-baseDark-dark '>
                    I already have an account 
                </Text>
                {/* <IconLable type='AntDesign' name={IconsName.ARROW_RIGHT} color='#FFFFFF' size={20} /> */}
                <IconLable
                    customClass='bg-primary-light rounded-full p-2  '
                    type={Icons_Library.AntDesign}
                    color={Colors.light.text}
                    size={20}
                    name={IconsName.ARROW_RIGHT}
                />
            </View> 
        </PageWraper>
    )
}

export default IntroScreen