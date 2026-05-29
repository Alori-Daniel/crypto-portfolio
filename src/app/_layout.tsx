import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "NeueMontreal-Regular": require("@/assets/fonts/NeueMontreal-Regular.otf"),
    "NeueMontreal-Bold": require("@/assets/fonts/NeueMontreal-Bold.otf"),
    "NeueMontreal-Medium": require("@/assets/fonts/NeueMontreal-Medium.otf"),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="(screens)/onboarding"
        options={{ headerShown: false, animation: "fade_from_bottom" }}
      />

      <Stack.Screen
        name="(auth)/register"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack>
  );
}
