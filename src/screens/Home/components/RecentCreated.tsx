import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "../../../components/CustomText";
import { useTheme } from "../../../hooks/useTheme";

const RecentCreated = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="clock-time-three-outline"
        size={20}
        color={theme.colors.icon}
      />
      <CustomText variant="categoryHeader">Recently created notes</CustomText>
    </View>
  );
};

export default RecentCreated;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
});
