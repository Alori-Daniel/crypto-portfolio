import { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
type variant = "bold" | "regular" | "semibold";

interface TextProps {
  children: ReactNode;
  style: StyleProp<TextStyle>;
  variant?: variant;
}
const FontFamilyByVariant: Record<variant, string> = {
  bold: "NeueMontreal-Bold",
  regular: "NeueMontreal-Regular",
  semibold: '"NeueMontreal-Medium"',
};

const CustomText = ({ children, style, variant = "regular" }: TextProps) => {
  return (
    <Text
      style={[style, styles.text, { fontFamily: FontFamilyByVariant[variant] }]}
    >
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {},
});
