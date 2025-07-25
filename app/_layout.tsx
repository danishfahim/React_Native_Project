import { FORGOT_PASSWORD, LOGIN, PASSWORD, PASSWORD_RESET_OpTION, RESET_PASSWORD, SECURE_APP_PASSWORD, SIGNUP, VERIFY_OTP } from '@/constants/appRoute';
import '@/global.css';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Theme } from '@/util/enum/theme';
import { AlbertSans_100Thin } from "@expo-google-fonts/albert-sans/100Thin";
import { AlbertSans_100Thin_Italic } from "@expo-google-fonts/albert-sans/100Thin_Italic";
import { AlbertSans_200ExtraLight } from "@expo-google-fonts/albert-sans/200ExtraLight";
import { AlbertSans_200ExtraLight_Italic } from "@expo-google-fonts/albert-sans/200ExtraLight_Italic";
import { AlbertSans_300Light } from "@expo-google-fonts/albert-sans/300Light";
import { AlbertSans_300Light_Italic } from "@expo-google-fonts/albert-sans/300Light_Italic";
import { AlbertSans_400Regular } from "@expo-google-fonts/albert-sans/400Regular";
import { AlbertSans_400Regular_Italic } from "@expo-google-fonts/albert-sans/400Regular_Italic";
import { AlbertSans_500Medium } from "@expo-google-fonts/albert-sans/500Medium";
import { AlbertSans_500Medium_Italic } from "@expo-google-fonts/albert-sans/500Medium_Italic";
import { AlbertSans_600SemiBold } from "@expo-google-fonts/albert-sans/600SemiBold";
import { AlbertSans_600SemiBold_Italic } from "@expo-google-fonts/albert-sans/600SemiBold_Italic";
import { AlbertSans_700Bold } from "@expo-google-fonts/albert-sans/700Bold";
import { AlbertSans_700Bold_Italic } from "@expo-google-fonts/albert-sans/700Bold_Italic";
import { AlbertSans_800ExtraBold } from "@expo-google-fonts/albert-sans/800ExtraBold";
import { AlbertSans_800ExtraBold_Italic } from "@expo-google-fonts/albert-sans/800ExtraBold_Italic";
import { AlbertSans_900Black } from "@expo-google-fonts/albert-sans/900Black";
import { AlbertSans_900Black_Italic } from "@expo-google-fonts/albert-sans/900Black_Italic";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    AlbertSans_100Thin,
    AlbertSans_200ExtraLight,
    AlbertSans_300Light,
    AlbertSans_400Regular,
    AlbertSans_500Medium,
    AlbertSans_600SemiBold,
    AlbertSans_700Bold,
    AlbertSans_800ExtraBold,
    AlbertSans_900Black,
    AlbertSans_100Thin_Italic,
    AlbertSans_200ExtraLight_Italic,
    AlbertSans_300Light_Italic,
    AlbertSans_400Regular_Italic,
    AlbertSans_500Medium_Italic,
    AlbertSans_600SemiBold_Italic,
    AlbertSans_700Bold_Italic,
    AlbertSans_800ExtraBold_Italic,
    AlbertSans_900Black_Italic,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === Theme.DARK ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name={SIGNUP.slice(1)} options={{ headerShown: false }} />
          <Stack.Screen name={LOGIN.slice(1)} options={{ headerShown: false }} />
          <Stack.Screen name={VERIFY_OTP.slice(1)} options={{ headerShown: false }} />
          <Stack.Screen name={FORGOT_PASSWORD.slice(1)} options={{ headerShown: false }} />
          <Stack.Screen name={SECURE_APP_PASSWORD.slice(1)} options={{ headerShown: false }} />
          <Stack.Screen name={PASSWORD.slice(1)} options={{ headerShown: false }} />
          <Stack.Screen name={PASSWORD_RESET_OpTION.slice(1)} options={{ headerShown: false }} />
           <Stack.Screen name={RESET_PASSWORD.slice(1)} options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
