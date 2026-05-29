import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import CustomTextInput from "../CustomTextInput";

const SignUp = () => {
  return (
    <View style={{ marginTop: 20, gap: 20 }}>
      <CustomText
        color="white"
        variant="bold"
        style={{ fontSize: 34, letterSpacing: 2 }}
      >
        Sign up
      </CustomText>

      <CustomTextInput placeholder="Enter your email" title="Email" />
      <CustomTextInput placeholder="Enter your password" title="Password" />

      <Pressable onPress={() => router.push("/(auth)/mobileregisteration")}>
        <CustomText color="secondary">Register with mobile</CustomText>
      </Pressable>

      <CustomButton style={{ height: 54 }}>
        <CustomText color="black">Sign up</CustomText>
      </CustomButton>

      <CustomText color="darktext" style={{ textAlign: "center" }}>
        Or sign up with
      </CustomText>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomButton style={{ backgroundColor: "white", flex: 1, height: 54 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="logo-facebook" size={23} />
            <CustomText style={{ fontSize: 16 }} color="black">
              Facebook
            </CustomText>
          </View>
        </CustomButton>
        <CustomButton style={{ backgroundColor: "white", flex: 1, height: 54 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="logo-google" size={23} />

            <CustomText style={{ fontSize: 16 }} color="black">
              Google
            </CustomText>
          </View>
        </CustomButton>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
