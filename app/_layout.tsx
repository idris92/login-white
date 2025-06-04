import { BrandProvider } from "@/context/BrandContext";
import "@/global.css";
import { useLoadFonts } from "@/hooks/useLoadFonts";
import { router, SplashScreen, Stack, useSegments } from "expo-router";
import { useEffect } from "react";
import { AuthContextProvider, useAuth } from '../context/authContext';


const Mainlayout = ()=>{
  const {isAuthenticated} = useAuth()
  const segments = useSegments()

  useEffect(() => {
    const inApp = segments[0]==='(root)'

    if(isAuthenticated && !inApp){
      //redirect to home
      router.replace('/(root)/home')
    }else if(isAuthenticated === false){
      //redirect to login page
      router.replace('/')
    }
  }, [isAuthenticated])
  
    return <Stack screenOptions={{headerShown:false}} />
}


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
        <Mainlayout/>
      </BrandProvider>
    </AuthContextProvider>
      
  );
}
