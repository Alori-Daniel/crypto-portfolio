import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import ScreenWrapper from "@/components/ScreenWrapper";
import { COLORS } from "@/constants/color";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

const verification = () => {
  const { phone } = useLocalSearchParams();
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRef = useRef<(TextInput | null)[]>([]);

  const handleNext = (text: string, index: number) => {
    console.log("inputRef", text, index);
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleBack = (e: any, index: number) => {
    console.log("native", e.nativeEvent);
    if (e.nativeEvent.key === "Backspace") {
      inputRef.current[index - 1]?.focus();
    }

    // if (e.nativeEvent ="Backspace")
  };
  return (
    <ScreenWrapper>
      <Pressable
        style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back-outline" color={COLORS.darkText} size={20} />
        <CustomText style={{ fontSize: 18 }}>Verification</CustomText>
      </Pressable>

      <View style={styles.nav}>
        <View style={{ gap: 15 }}>
          <CustomText
            color="white"
            variant="bold"
            style={{ fontSize: 34, letterSpacing: 2 }}
          >
            Enter your code
          </CustomText>

          <CustomText>Please typee the code sent to {phone}</CustomText>
        </View>

        <View style={{ gap: 30 }}>
          <View
            style={{ flexDirection: "row", gap: 20, justifyContent: "center" }}
          >
            {code.map((cod, index) => {
              return (
                <View key={index} style={styles.boxInput}>
                  <TextInput
                    ref={(ref) => {
                      inputRef.current[index] = ref;
                    }}
                    style={{
                      height: 50,
                      width: 50,
                      color: COLORS.white,
                      textAlign: "center",
                      fontSize: 20,
                    }}
                    onKeyPress={(e) => handleBack(e, index)}
                    onChangeText={(text) => handleNext(text, index)}
                  />
                </View>
              );
            })}
          </View>

          <View style={{ alignItems: "center", gap: 5 }}>
            <CustomText>Resend code (30)</CustomText>
            <CustomText color="secondary">Resend Link</CustomText>
          </View>

          <CustomButton
            onPress={() =>
              router.push({
                pathname: "/(auth)/success",
              })
            }
            style={{ height: 54 }}
          >
            <CustomText style={{ fontSize: 16 }} color="black">
              Continue
            </CustomText>
          </CustomButton>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default verification;

const styles = StyleSheet.create({
  nav: {
    marginTop: 34,
    gap: 40,
  },
  boxInput: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.bgDark,
  },
});
