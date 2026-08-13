import { Stack,useRouter } from "expo-router";
import {ReactNode, useEffect} from "react";

const isAuth = false;


export function RoutGuard({children}: {children:ReactNode}){
const router = useRouter()

  useEffect(()=>{
    if(!isAuth){
      router.replace("/register")
    }
  },[])
  return <>{children}</>
}


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name = "register" options = {{headerShown: false}}/>
      <Stack.Screen name = "login" options = {{headerShown: false}}/>
    </Stack>
  );
}