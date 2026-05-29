import { StyleSheet, View } from "react-native";
import CustomText from "../CustomText";

const SignIn = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <CustomText
        color="white"
        variant="bold"
        style={{ fontSize: 34, letterSpacing: 2 }}
      >
        Sign in
      </CustomText>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
