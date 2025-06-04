import { Stack } from "expo-router";
import { BrandProvider } from "@/context/BrandContext";
import { SplashScreen } from "expo-router"
import { useEffect } from "react"
import { useLoadFonts } from "@/hooks/useLoadFonts"
import "@/global.css"
import {AuthContextProvider} from '@/context/authContext'


export default function RootLayout() {
  const [loaded] = useLoadFonts()

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null
  return (
    <AuthContextProvider>
      <BrandProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </BrandProvider>
    </AuthContextProvider>
      
  );
}
