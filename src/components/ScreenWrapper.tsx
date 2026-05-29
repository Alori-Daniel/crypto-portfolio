import { COLORS } from "@/constants/color";
import { ScrollView, ScrollViewProps, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps extends ScrollViewProps {
  children: React.ReactNode;
  isScrollable?: boolean;
  useInset?: boolean;
}

const ScreenWrapper = ({
  children,
  isScrollable,
  useInset = true,
  contentContainerStyle,
  style,

  ...props
}: ScreenWrapperProps) => {
  const inset = useSafeAreaInsets();
  return isScrollable ? (
    <ScrollView
      {...props}
      style={[
        styles.container,
        useInset && {
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
        },
        style,
      ]}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </ScrollView>
  ) : (
    <View
      style={[
        styles.container,
        useInset && {
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.background,
  },
});
