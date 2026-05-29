import image1 from "@/assets/images/onboarding/created.png";
import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import ScreenWrapper from "@/components/ScreenWrapper";
import { router } from "expo-router";
import { Dimensions, Image, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const success = () => {
  return (
    <ScreenWrapper
      style={{ alignItems: "center", gap: 20, paddingTop: height / 6 }}
    >
      <Image
        source={image1}
        resizeMode="contain"
        style={{ height: height / 3, width: width / 2 }}
      />
      <CustomText
        color="white"
        variant="bold"
        style={{ fontSize: 34, textAlign: "center" }}
      >
        Your account has been successfully created
      </CustomText>

      <CustomButton
        onPress={() => router.push("/(tabs)/home")}
        style={{ width: "100%", height: 54 }}
      >
        <CustomText style={{ fontSize: 18 }} color="black">
          Get Started
        </CustomText>
      </CustomButton>
    </ScreenWrapper>
  );
};

export default success;

const styles = StyleSheet.create({});
