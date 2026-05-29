import { COLORS } from "@/constants/color";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import CustomText from "./CustomText";

interface CustomTextInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
}

const CustomTextInput = ({
  style,
  containerStyle,
  title,
  placeholderTextColor = COLORS.bgLight,
  ...props
}: CustomTextInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CustomText style={{ marginBottom: 6, fontSize: 14 }} color="darktext">
        {title}
      </CustomText>
      <TextInput
        {...props}
        style={[styles.input, style]}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    height: 54,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.bgDark,
    color: COLORS.darkText,
    fontFamily: "NeueMontreal-Regular",
    fontSize: 16,
  },
});
