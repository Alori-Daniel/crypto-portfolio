import Home from "@/assets/images/icons/Home";
import Receipt from "@/assets/images/icons/Receipt";
import Send from "@/assets/images/icons/Send";
import Shopping from "@/assets/images/icons/Shopping";
import Wallet from "@/assets/images/icons/Wallet";
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
          tabBarAllowFontScaling: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => <Home color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="markets"
        options={{
          tabBarAllowFontScaling: false,
          title: "Markets",
          tabBarIcon: ({ color, size }) => <Shopping color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="trades"
        options={{
          tabBarAllowFontScaling: false,
          title: "Trades ",
          tabBarIcon: ({ color, size }) => <Send color={color} />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarAllowFontScaling: false,
          title: "Activity",
          tabBarIcon: ({ color, size }) => <Receipt color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="wallets"
        options={{
          tabBarAllowFontScaling: false,
          title: "Wallets",
          tabBarIcon: ({ color, size }) => <Wallet color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
