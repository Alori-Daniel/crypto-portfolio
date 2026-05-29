import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import CustomTextInput from "@/components/CustomTextInput";
import ScreenWrapper from "@/components/ScreenWrapper";
import { COLORS } from "@/constants/color";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

const mobileregisteration = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  console.log(phoneNumber);

  return (
    <ScreenWrapper>
      <Pressable
        style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back-outline" color={COLORS.darkText} size={20} />
        <CustomText style={{ fontSize: 18 }}>Sign Up</CustomText>
      </Pressable>

      <View style={styles.nav}>
        <View style={{ gap: 15 }}>
          <CustomText
            color="white"
            variant="bold"
            style={{ fontSize: 34, letterSpacing: 2 }}
          >
            Register with mobile
          </CustomText>

          <CustomText>
            Please typee your number then we'll send a verification code for
            authentication.
          </CustomText>
        </View>

        <View style={{ gap: 30 }}>
          <CustomTextInput
            title="Mobile Number"
            placeholder="Enter your mobile"
            onChangeText={setPhoneNumber}
          />

          <CustomButton
            onPress={() =>
              router.push({
                pathname: "/(auth)/verification",
                params: { phone: phoneNumber },
              })
            }
            style={{ height: 54 }}
          >
            <CustomText color="black">Send OTP</CustomText>
          </CustomButton>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default mobileregisteration;

const styles = StyleSheet.create({
  nav: {
    marginTop: 34,
    gap: 40,
  },
});
