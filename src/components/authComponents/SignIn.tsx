import { COLORS } from "@/constants/color";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import CustomTextInput from "../CustomTextInput";

const SignIn = () => {
  return (
    <View style={{ marginTop: 20, gap: 20 }}>
      <CustomText
        color="white"
        variant="bold"
        style={{ fontSize: 34, letterSpacing: 2 }}
      >
        Sign in
      </CustomText>

      <CustomTextInput placeholder="Enter your email" title="Email" />
      <CustomTextInput placeholder="Enter your password" title="Password" />

      <CustomText color="secondary">Forgot password?</CustomText>

      <CustomButton style={{ height: 54 }}>
        <CustomText color="black">Sign in</CustomText>
      </CustomButton>

      <CustomText color="darktext" style={{ textAlign: "center" }}>
        Or login with
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

      <View style={{ alignItems: "center", gap: 10 }}>
        <Ionicons
          name="finger-print-outline"
          size={40}
          color={COLORS.secondary}
        />
        <CustomText style={{ fontSize: 14 }}>
          Use fingerprint instead?
        </CustomText>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
