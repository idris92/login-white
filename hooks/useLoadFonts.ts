// hooks/useLoadFonts.ts
import { useFonts } from "expo-font"

export const useLoadFonts = () => {
  return useFonts({
    "Jakarta-Bold": require("@/assets/fonts/jakarta/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("@/assets/fonts/jakarta/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("@/assets/fonts/jakarta/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("@/assets/fonts/jakarta/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("@/assets/fonts/jakarta/PlusJakartaSans-Medium.ttf"),
    Jakarta: require("@/assets/fonts/jakarta/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("@/assets/fonts/jakarta/PlusJakartaSans-SemiBold.ttf"),

    "Rubik-Bold": require("@/assets/fonts/rubik/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("@/assets/fonts/rubik/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("@/assets/fonts/rubik//Rubik-Light.ttf"),
    "Rubik-Medium": require("@/assets/fonts/rubik/Rubik-Medium.ttf"),
    "Rubik-Regular": require("@/assets/fonts/rubik/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("@/assets/fonts/rubik/Rubik-SemiBold.ttf"),
  })
}
