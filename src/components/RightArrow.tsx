import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

const RightArrow = ({ size = 18 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 8 14">
      <Defs>
        <LinearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor={"#F94695"} />
          <Stop offset="100%" stopColor={"#F13A76"} />
        </LinearGradient>
      </Defs>
      <Path
        d="M0.292893 0.292893C0.683418 -0.097631 1.31658 -0.0976309 1.70711 0.292894L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.7071 13.7071C1.31658 14.0976 0.683415 14.0976 0.292891 13.7071C-0.0976334 13.3166 -0.0976333 12.6834 0.292891 12.2929L5.58579 7L0.292893 1.70711C-0.0976313 1.31658 -0.0976312 0.683417 0.292893 0.292893Z"
        fill="url(#iconGradient)"
      />
    </Svg>
  );
};

export default RightArrow;

const styles = StyleSheet.create({});
