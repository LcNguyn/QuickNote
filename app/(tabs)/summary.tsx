import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import BlurContainer from "../../src/components/BlurContainer";
import CustomText from "../../src/components/CustomText";
import PinkyButton from "../../src/components/PinkyButton";
import { useTheme } from "../../src/hooks/useTheme";
import { RootState } from "../../src/redux/store";
import { NoteCategory } from "../../src/types/note";
import borderRadius from "../../theme/borderRadius";

const CategoryIcon = ({ category }: { category: NoteCategory }) => {
  let imageSource;
  switch (category) {
    case "Health and Wellness":
      imageSource = require("../../assets/icons/summaryTab/summary-health.png");
      break;
    case "Life":
      imageSource = require("../../assets/icons/summaryTab/summary-life.png");
      break;
    case "Work and Study":
      imageSource = require("../../assets/icons/summaryTab/summary-workstudy.png");
      break;
  }

  return (
    <Image source={imageSource} style={styles.image} resizeMode="contain" />
  );
};

const SummaryScreen = () => {
  const theme = useTheme();
  const { noteIds, noteEntities, loading } = useSelector(
    (state: RootState) => state.notes
  );

  let categoriesCount: { [key in NoteCategory]: number } = {
    "Work and Study": 0,
    Life: 0,
    "Health and Wellness": 0,
  };

  noteIds.forEach((id) => {
    const note = noteEntities[id];
    if (note) {
      categoriesCount[note.category] += 1;
    }
  });

  //Show categories with number of notes in each category
  return (
    <>
      {loading ? (
        <>
          <CustomText>Loading...</CustomText>
        </>
      ) : (
        <View
          style={{
            ...styles.container,
            backgroundColor: theme.colors.containerBg,
          }}
        >
          {Object.entries(categoriesCount).map(([category, count]) => (
            <View key={category} style={styles.categoryContainer}>
              <View style={styles.categoryHeader}>
                <CategoryIcon category={category as NoteCategory} />
                <CustomText
                  variant="categoryHeader"
                  style={styles.categoryTitle}
                >
                  {category}
                </CustomText>
                <PinkyButton
                  label="Detail"
                  size="xs"
                  onPress={() => {
                    console.log("Detail button pressed", category);
                  }}
                ></PinkyButton>
              </View>
              <BlurContainer style={styles.recordContainer}>
                <CustomText>{`This topic has a total of ${count} ${
                  count <= 1 ? "record" : "records"
                }`}</CustomText>
              </BlurContainer>
            </View>
          ))}
        </View>
      )}
    </>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
    marginTop: 26,
    borderRadius: borderRadius.lg,
  },
  image: {
    width: 50,
    height: 50,
  },
  categoryContainer: { gap: 8 },
  recordContainer: {
    alignItems: "flex-start",
  },
  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  categoryTitle: { flex: 1 },
});
