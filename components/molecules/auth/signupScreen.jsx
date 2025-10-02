import DropdownComponent from "@/components/atom/DropDown";
import IconLable from "@/components/atom/IconLable";
import InputField from "@/components/atom/InputField";
import PrimaryButton from "@/components/atom/PrimaryButton";
import PageWraper from "@/components/organisms/pageWraper";
import { LOGIN } from "@/constants/appRoute";
import { Icons } from "@/constants/icons";
import { Icons_Library } from "@/constants/IconsLibrary";
import { images } from "@/constants/images";
import { AuthAPI } from "@/hooks/auth/auth";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";

const SignupScreen = () => {
  const [submittedData, setSubmittedData] = useState(null);

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

  async function onsubmit(data) {
    const { email, password } = data;

    try {
      const result = await AuthAPI.register({ email, password });
      console.log("User signed up:", result);
      router.push(LOGIN); // move to login screen after success
    } catch (error) {
      console.error("Signup failed:", error.message);
      // Show error to user if needed
    }
  }

  return (
    <PageWraper>
      <Image
        source={images.BLUE_CLOUD}
        style={{
          width: 190,
          height: 200,
          top: -20,
          left: -20,
          position: "absolute",
        }}
        className="rounded-[14px] mt-3.5 absolute top-3 left-8"
      />

      <Image
        source={images.ROYALBUBLE2}
        style={{
          width: 110,
          height: 300,
          top: 80,
          right: -20,
          position: "absolute",
        }}
        className="rounded-[14px] mt-3.5 absolute top-3 left-8"
      />
      <View>
        <View className="h-28" />
        <Text className="text-baseDark-light dark:text-baseDark-dark b-w- font-albertSans700Bold text-[50px] mx-auto border-da">
          Create Account
        </Text>
        <View className="h-12" />
        <IconLable
          type={Icons_Library.SimpleLineIcons}
          color="#004CFF"
          size={34}
          name="camera"
          customClass="mr-auto p-8 border border-dashed border-[2px] border-primary-light bg-lightGray-light rounded-full"
        />
      </View>
      <View className="h-8" />

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
          customClass="mt-2"
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
        <DropdownComponent
          option={data}
          name="phone"
          control={control}
          placeholder="Enter phone number"
          rules={{ required: "Phone is required" }}
          errors={errors}
        />
        <PrimaryButton title="Sign Up" handleClick={handleSubmit(onsubmit)} />
        <TouchableOpacity
          className="items-center mt-6"
          onPress={() => router.push(LOGIN)}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </PageWraper>
  );
};

export default SignupScreen;
