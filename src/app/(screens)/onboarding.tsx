import image1 from "@/assets/images/onboarding/image1.png";
import image2 from "@/assets/images/onboarding/image2.png";

import image3 from "@/assets/images/onboarding/image3.png";
import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";

import ScreenWrapper from "@/components/ScreenWrapper";
import { COLORS } from "@/constants/color";
import { OnboardData } from "@/lib/types";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const onboardData: OnboardData[] = [
  {
    image: image1,
    title: "Trade anytime anywhere",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    image: image2,
    title: "Save and invest at the same time",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    image: image3,
    title: "Transact fast and easy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

const onboarding = () => {
  const scrollRef = useRef<ScrollView | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / SCREEN_WIDTH);
    setActiveIndex(index);
    // console.log("dd", contentOffsetX);
    // console.log("next", index);
  };

  const handleNext = () => {
    let nextIndex = activeIndex + 1;

    if (scrollRef.current && nextIndex < onboardData.length) {
      scrollRef.current.scrollTo({
        x: nextIndex * SCREEN_WIDTH,
        animated: true,
      });
    } else {
      router.push("/(auth)/register");
    }
  };
  return (
    <ScreenWrapper style={{ paddingHorizontal: 0 }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        onScroll={handleScroll}
        pagingEnabled
        horizontal
        ref={scrollRef}
      >
        {onboardData.map((data) => (
          <View key={data.title} style={styles.onboard}>
            <Image source={data.image} style={styles.image} />
            <CustomText style={{ fontSize: 24 }} color="white">
              {data.title}
            </CustomText>

            <CustomText
              variant="regular"
              style={{ textAlign: "center", fontSize: 18 }}
            >
              {data.description}
            </CustomText>
          </View>
        ))}
      </ScrollView>
      <View style={styles.secondaryView}>
        {/* Paginator */}
        <View style={styles.paginatorContainer}>
          {onboardData.map((item, index) => {
            return (
              <View
                style={[
                  styles.paginator,
                  {
                    backgroundColor:
                      activeIndex === index ? COLORS.darkText : COLORS.bgLight,
                  },
                ]}
                key={item.title}
              ></View>
            );
          })}
        </View>
        <CustomButton
          onPress={handleNext}
          style={{
            width: 180,
            height: 54,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomText color="black">Next</CustomText>
        </CustomButton>
      </View>
    </ScreenWrapper>
  );
};

export default onboarding;

const styles = StyleSheet.create({
  onboard: {
    padding: 20,
    alignItems: "center",
    width: SCREEN_WIDTH,
    // borderWidth: 1,
    gap: 20,
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2.4,
    resizeMode: "contain",
  },
  secondaryView: {
    marginVertical: 10,
    alignItems: "center",
    gap: 30,
  },
  scrollView: {
    // height: SCREEN_HEIGHT / 1.5,
    flexGrow: 0,
    marginBottom: 20,
  },
  paginator: {
    height: 10,
    width: 10,
    borderRadius: 50,
  },
  paginatorContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
