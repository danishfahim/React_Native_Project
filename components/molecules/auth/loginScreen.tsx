import InputField from "@/components/atom/InputField";
import PrimaryButton from "@/components/atom/PrimaryButton";
import PageWraper from "@/components/organisms/pageWraper";
import { LOGIN } from "@/constants/appRoute";
import { Icons } from "@/constants/icons";
import { Icons_Library } from '@/constants/IconsLibrary';
import { images } from "@/constants/images";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
const LoginScreen = () => {
    const [submittedData, setSubmittedData] = useState(null);

    console.log(Icons_Library.SimpleLineIcons)
    const data = [
        { label: "English", value: "eng", icon: Icons.ENG },
        { label: "French", value: "fra", icon: Icons.ENG },
        { label: "German", value: "ger", icon: Icons.ENG },
    ];

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();




    async function onsubmit(data : any) { 
        
        setSubmittedData(data);
    }




    // function onsubmit(data) {
    //   // Simulate form submission
    //   console.log("Submitted Data:", data);
    //   setSubmittedData(data);
    // }

    return (
        <PageWraper>
            <Image
                source={images.ICEBLUE}
                style={{
                    width: 260,
                    height: 290,
                    top: -40,
                    left: -20,
                    position: "absolute",
                }}
                className="rounded-[14px] mt-3.5 absolute top-3 left-8"
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
                className="rounded-[14px] mt-3.5 absolute top-3 left-8"
            />
            <Image
                source={images.ROYALBUBLE4}
                style={{
                    width: 55,
                    height: 110,
                    top: 230,
                    right: -20,
                    position: "absolute",
                }}
                className="rounded-[14px] mt-3.5 absolute top-3 left-8"
            />
            <View className="h-52" />
            <View className="h-48" />
            <View className="h-14" />
            <View className="">
                <Text className="text-baseDark-light dark:text-baseDark-dark  font-albertSans700Bold text-[50px]   border-da">
                    Login
                </Text>
                <View className="flex-row">
                    <Text className="font-albertSans300Light text-[19px]">Good to see you back!  </Text>
                    <Image source={images.HEART}
                        style={{
                            marginTop: 3,
                            width: 17,
                            height: 16,
                            flexShrink: 0
                        }}
                    />
                </View>

                {/* <IconLable
                    type={Icons_Library.SimpleLineIcons}
                    color="#004CFF"
                    size={34}
                    name={IconsName.CAMERA} 
                    customClass="mr-auto p-8 border border-dashed border-[2px] border-primary-light bg-lightGray-light rounded-full"
                /> */}
            </View>

            <View>
                <InputField
                    name="email"
                    control={control}
                    placeholder="Email"
                    rules={{
                        required: "Email is required",
                        placeholder: "please enter yor email",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Enter a valid email address",
                        },
                    }}
                    errors={errors}
                    customClass="mt-5"
                />


                <PrimaryButton title="Sign Up" handleClick={handleSubmit(onsubmit)} customClass="mt-8" />
                <TouchableOpacity className="items-center mt-4">
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
        </PageWraper>
    );
};

export default LoginScreen;
