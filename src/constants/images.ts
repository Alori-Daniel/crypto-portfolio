import deposit from "@/assets/images/icons/featureIcon/Deposit.png";
import referral from "@/assets/images/icons/featureIcon/referral.png";

import grid from "@/assets/images/icons/featureIcon/grid.png";

import margin from "@/assets/images/icons/featureIcon/margin.png";

import launchpad from "@/assets/images/icons/featureIcon/launchpad.png";

import savings from "@/assets/images/icons/featureIcon/savings.png";

import liquidswap from "@/assets/images/icons/featureIcon/liquidswap.png";
import more from "@/assets/images/icons/featureIcon/more.png";
import { ImageSourcePropType } from "react-native";

export const featureImage = {
  deposit,
  referral,
  grid,
  margin,
  launchpad,
  savings,
  liquidswap,
  more,
};

export interface icon {
  title: string;
  image: ImageSourcePropType;
}
export const iconFeatures: icon[] = [
  {
    title: "Deposit",
    image: deposit,
  },
  {
    title: "Referral",
    image: referral,
  },
  {
    title: "Grid Trading",
    image: grid,
  },
  {
    title: "Margin",
    image: margin,
  },
  {
    title: "Launchpad",
    image: launchpad,
  },
  {
    title: "Savings",
    image: savings,
  },
  {
    title: "Liquid Swap",
    image: liquidswap,
  },
  {
    title: "More",
    image: more,
  },
];
