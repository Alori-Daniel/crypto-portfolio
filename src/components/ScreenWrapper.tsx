import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  children: React.ReactNode;
  isScrollable?: Boolean;
  useInset?: Boolean;
}

const ScreenWrapper = ({
  children,
  isScrollable,
  useInset = true,
}: ScreenWrapperProps) => {
  const inset = useSafeAreaInsets();
  return isScrollable ? (
    <ScrollView
      style={[
        styles.container,
        useInset && {
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
        },
      ]}
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
  },
});
