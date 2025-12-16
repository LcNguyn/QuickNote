import React from "react";
import { Image, StyleSheet, View } from "react-native";
import CustomText from "../../../components/CustomText";
import { Note, NoteCategory } from "../../../types/note";

const CategoryIcon = ({ category }: { category: NoteCategory }) => {
  let imageSource;
  switch (category) {
    case "Health and Wellness":
      imageSource = require("../../../../assets/icons/homeTab/home-health.png");
      break;
    case "Life":
      imageSource = require("../../../../assets/icons/homeTab/home-life.png");
      break;
    case "Work and Study":
      imageSource = require("../../../../assets/icons/homeTab/home-workstudy.png");
      break;
  }

  return (
    <Image source={imageSource} style={styles.image} resizeMode="contain" />
  );
};
const CategoryHeader = ({
  section: { title },
}: {
  section: { title: string; data: Note[] };
}) => (
  <View style={styles.categoryHeader}>
    <CategoryIcon category={title as NoteCategory} />
    <CustomText variant="categoryHeader">{title}</CustomText>
  </View>
);

export default CategoryHeader;

const styles = StyleSheet.create({
  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: 20,
    height: 20,
  },
});
