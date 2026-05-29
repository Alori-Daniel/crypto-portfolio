import icon from "@/assets/images/icon.png";
import backgroungImage from "@/assets/images/splashBackground.png";
import CustomText from "@/components/CustomText";
import { COLORS } from "@/constants/color";
import { router } from "expo-router";
import { useEffect } from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");
export default function Index() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  useEffect(() => {
    translateX.value = withTiming(width / 1.5, { duration: 3000 });
    translateY.value = withTiming(
      -height / 3,
      { duration: 3000 },
      (isFinished) => {
        if (isFinished) {
          console.log("Finished Animeatin");
          runOnJS(router.replace)("/(screens)/onboarding");
        }
      },
    );
  }, []);
  console.log(width);

  return (
    <ImageBackground source={backgroungImage} style={styles.container}>
      <Animated.Image source={icon} style={rStyle} />
      <CustomText variant="bold" style={[styles.text]}>
        tMinus1
      </CustomText>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    letterSpacing: 5,
    color: COLORS.white,
  },
});
