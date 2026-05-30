import Home from "@/assets/images/icons/Home";
import Receipt from "@/assets/images/icons/Receipt";
import Send from "@/assets/images/icons/Send";
import Shopping from "@/assets/images/icons/Shopping";
import Wallet from "@/assets/images/icons/Wallet";
import { COLORS } from "@/constants/color";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const icons: any = {
  home: (props: any, color: any) => <Home color={color} {...props} />,
  markets: (props: any, color: any) => <Shopping color={color} {...props} />,

  trades: (props: any, color: any) => <Send color={color} {...props} />,

  activity: (props: any, color: any) => <Receipt color={color} {...props} />,
  wallets: (props: any, color: any) => <Wallet color={color} {...props} />,
};

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;
        console.log(route.name);

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabBarItem}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name]({
              color: isFocused ? COLORS.secondary : COLORS.darkText,
            })}
            <Text
              style={{
                color: isFocused ? COLORS.secondary : COLORS.darkText,
                fontSize: 12,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    paddingVertical: 17,
    // borderWidth: 1,
    backgroundColor: COLORS.background,
    marginHorizontal: 20,
    bottom: 25,
    borderRadius: 20,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 10,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
});
