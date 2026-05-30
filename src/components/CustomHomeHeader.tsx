import notifIcon from "@/assets/images/icons/headerIcon/notify.png";
import searchIcon from "@/assets/images/icons/headerIcon/search.png";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import avatar from "@/assets/images/icons/headerIcon/avatar.png";
import menuIcon from "@/assets/images/icons/headerIcon/menu.png";
import { COLORS } from "@/constants/color";

const images = [searchIcon, menuIcon, notifIcon];
const CustomHomeHeader = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: inset.top }]}>
      <Image source={avatar} />

      <View style={styles.rightNav}>
        {images.map((image, index) => {
          return <Image key={index} source={image} />;
        })}
      </View>
    </View>
  );
};

export default CustomHomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.background,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    zIndex: 5,
  },
  rightNav: {
    flexDirection: "row",
  },
});
