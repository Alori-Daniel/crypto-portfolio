import { COLORS } from "@/constants/color";
import { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
type variant = "bold" | "regular" | "semibold";
type colorVariant = "white" | "darktext" | "black" | "secondary";

interface TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  variant?: variant;
  color?: colorVariant;
}
const FontFamilyByVariant: Record<variant, string> = {
  bold: "NeueMontreal-Bold",
  regular: "NeueMontreal-Regular",
  semibold: '"NeueMontreal-Medium"',
};
const ColorByVariant: Record<colorVariant, string> = {
  white: COLORS.white,
  darktext: COLORS.darkText,
  black: COLORS.black,
  secondary: COLORS.secondary,
};

const CustomText = ({
  children,
  style,
  variant = "regular",
  color = "darktext",
}: TextProps) => {
  return (
    <Text
      style={[
        style,
        styles.text,
        { color: ColorByVariant[color] },
        { fontFamily: FontFamilyByVariant[variant] },
      ]}
    >
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {},
});
