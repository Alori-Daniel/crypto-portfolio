import SignIn from "@/components/authComponents/SignIn";
import SignUp from "@/components/authComponents/SignUp";
import CustomText from "@/components/CustomText";
import ScreenWrapper from "@/components/ScreenWrapper";
import { COLORS } from "@/constants/color";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type stage = "signIn" | "signUp";
const stages: stage[] = ["signIn", "signUp"];

const signUp = () => {
  const [currentStage, setcurrentStage] = useState<stage>("signIn");

  return (
    <ScreenWrapper>
      <Pressable onPress={() => router.back()}>
        <Ionicons name="close" color={COLORS.darkText} size={26} />
      </Pressable>

      <View style={styles.nav}>
        {stages.map((item, index) => {
          return (
            <Pressable
              onPress={() => setcurrentStage(item)}
              key={index}
              style={[
                styles.buttonContainer,
                {
                  backgroundColor:
                    currentStage === item ? COLORS.background : "",
                },
              ]}
            >
              <CustomText>
                {item === "signIn" ? "Sign In" : "Sign Up"}
              </CustomText>
            </Pressable>
          );
        })}
      </View>
      {currentStage === "signIn" ? <SignIn /> : <SignUp />}
    </ScreenWrapper>
  );
};

export default signUp;

const styles = StyleSheet.create({
  nav: {
    marginTop: 34,
    flexDirection: "row",
    padding: 4,
    gap: 5,
    backgroundColor: COLORS.bgDark,
    borderRadius: 12,
    height: 46,
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
