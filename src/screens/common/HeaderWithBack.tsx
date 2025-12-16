import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import CustomText from "../../components/CustomText";

const HeaderWithBack = ({ label }: { label: string }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={() => router.back()} style={styles.container}>
      <Ionicons
        name="chevron-back-outline"
        size={24}
        color={theme.colors.icon}
      />
      <CustomText style={styles.label} variant="screenTitle">
        {label}
      </CustomText>
    </TouchableOpacity>
  );
};

export default HeaderWithBack;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginLeft: 8,
  },
});
