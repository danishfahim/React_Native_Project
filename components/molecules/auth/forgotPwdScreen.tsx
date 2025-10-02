import InputField from "@/components/atom/InputField";
import PrimaryButton from "@/components/atom/PrimaryButton";
import PageWraper from "@/components/organisms/pageWraper";
import { Icons_Library } from '@/constants/IconsLibrary';
import { images } from "@/constants/images";
import { AuthAPI } from "@/hooks/auth/auth";
import { Image } from "expo-image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";

const ForgotPswScreen = () => {
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
      console.log("Attempting reset with:", { email });
      await AuthAPI.forgotPassword(email);
      console.log("Password reset email sent successfully!");
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error("ForgotPassword failed:", error instanceof Error ? error.message : String(error));
      alert("Reset failed: " + (error instanceof Error ? error.message : String(error)));
    }

    setSubmittedData(data);
  }


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
      <View className="h-72" />
      {/* <View className="h-48" /> */}
      <View className="h-28" />
      <View className="">
        <Text className="text-baseDark-light dark:text-baseDark-dark  font-albertSans700Bold text-[40px] ">
          Reset Password
        </Text>
        <View className="flex-row">
          <Text className="font-albertSans300Light text-[19px] mt-4">Enter email address to reset password heart 🖤</Text>

        </View>
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
        <PrimaryButton title="Reset Password" handleClick={handleSubmit(onsubmit)} customClass="mt-2" />
        <TouchableOpacity className="items-center mt-4">
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </PageWraper>
  );
};

export default ForgotPswScreen;
