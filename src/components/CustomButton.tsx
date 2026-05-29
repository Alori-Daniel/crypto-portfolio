import { COLORS } from "@/constants/color";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
const CustomButton = ({ children, style, ...props }: ButtonProps) => {
  return (
    <Pressable {...props} style={[styles.button, style]}>
      {children}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    // height: 54,
    alignItems: "center",
    justifyContent: "center",
  },
});
