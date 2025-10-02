import InputField from "@/components/atom/InputField";
import PrimaryButton from "@/components/atom/PrimaryButton";
import PageWraper from "@/components/organisms/pageWraper";
import { FORGOT_PASSWORD } from "@/constants/appRoute";
import { Icons_Library } from '@/constants/IconsLibrary';
import { images } from "@/constants/images";
import { AuthAPI } from "@/hooks/auth/auth";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
const LoginScreen = () => {
    const [submittedData, setSubmittedData] = useState(null);

    console.log(Icons_Library.SimpleLineIcons)

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();




    async function onsubmit(data: any) {
        console.log("Login form submitted with data:", data);
        const { email, password } = data;

        try {
            console.log("Attempting login with:", { email, password });
            const { user, session } = await AuthAPI.login({ email, password });
            console.log("Login successful!");
            console.log("User data:", user);
            console.log("Session data:", session);
            alert("Login successful! Check console for user data.");
            // router.push(HOME); // Add your home route here
        } catch (error) {
            console.error("Login failed:", error instanceof Error ? error.message : String(error));
            alert("Login failed: " + (error instanceof Error ? error.message : String(error)));
        }

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
                    <Text className="font-albertSans300Light text-[19px]">Good to see you back! 🖤</Text>
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
                <InputField
                    name="password"
                    control={control}
                    placeholder="Password"
                    secureTextEntry
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Minimum 6 characters required",
                        },
                    }}
                    errors={errors}
                    customClass="mt-3"
                />
                <TouchableOpacity onPress={() => router.push(FORGOT_PASSWORD)}>
                    <Text className="flex flex-row-reverse ml-auto mt-5 text-primary-light font-albertSans700Bold text-base">Forgot your password?</Text>
                </TouchableOpacity>
                <PrimaryButton title="Login" handleClick={handleSubmit(onsubmit)} customClass="mt-2" />
                <TouchableOpacity className="items-center mt-4">
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
        </PageWraper>
    );
};

export default LoginScreen;
