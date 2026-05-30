import CustomTabBar from "@/components/CustomTabBar";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const _layout = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="markets"
        options={{
          title: "Markets",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="trades"
        options={{
          title: "Trades ",
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="wallets"
        options={{
          title: "Wallets",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
