import rocket from "@/assets/images/icons/Rocket.png";
import credit from "@/assets/images/icons/credit.png";
import CustomHomeHeader from "@/components/CustomHomeHeader";
import CustomText from "@/components/CustomText";
import ScreenWrapper from "@/components/ScreenWrapper";
import { COLORS } from "@/constants/color";
import { icon, iconFeatures } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";

import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

interface item {
  item: icon;
}
const trade = [
  {
    name: "P2P Trading",
    description: "Bank Transfer",
    image: rocket,
  },
  {
    name: "Credit/Debit Card",
    description: "Visa, Mastercard",
    image: credit,
  },
];
const RenderItem = ({ item }: item) => {
  return (
    <View
      style={{
        width: "22%",
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 1,
      }}
    >
      <Image
        source={item.image}
        style={{ width: 44, height: 44, resizeMode: "contain" }}
      />
      <CustomText>{item.title}</CustomText>
    </View>
  );
};
const home = () => {
  return (
    <ScreenWrapper
      style={{ paddingHorizontal: 0, backgroundColor: COLORS.background }}
      useInset={false}
    >
      <CustomHomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={styles.ScrollView}
      >
        <View style={styles.viewBox}>
          <FlatList
            scrollEnabled={false}
            data={iconFeatures}
            columnWrapperStyle={styles.iconRow}
            style={styles.flatlist}
            keyExtractor={(icon, index) => index.toString()}
            numColumns={4}
            renderItem={(item) => <RenderItem item={item.item} />}
          />
        </View>

        <View style={styles.secondViewbox}>
          {trade.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: COLORS.grey,
                  borderRadius: 12,
                  padding: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 18,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      position: "relative",
                      height: 50,
                      width: 50,
                      borderRadius: 12,
                      backgroundColor: COLORS.background,
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{
                        position: "absolute",
                        height: 50,
                        bottom: 1,
                        right: -3,
                        resizeMode: "contain",
                      }}
                    />
                  </View>
                  <View style={{ gap: 4 }}>
                    <CustomText color="black">{item.name}</CustomText>
                    <CustomText>{item.description}</CustomText>
                  </View>
                </View>
                <View
                  style={{
                    // borderWidth: 1,
                    width: 40,
                    height: 40,
                    backgroundColor: "#e3e8ed",
                    borderRadius: 12,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons
                    name="arrow-forward"
                    size={18}
                    color={COLORS.darkText}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default home;

const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    // borderWidth: 1,
    // backgroundColor: COLORS.white,
  },
  viewBox: {
    // height: 200,
    // borderWidth: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  scrollContent: {
    // flexGrow: 1,
  },
  secondViewbox: {
    flex: 1,
    height: height / 1.2,
    backgroundColor: COLORS.white,
    paddingHorizontal: 25,
    paddingVertical: 21,
    gap: 10,
    // borderWidth: 1,
  },
  flatlist: {},
  iconRow: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
