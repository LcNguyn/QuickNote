import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import BlurContainer from "../../src/components/BlurContainer";
import CustomText from "../../src/components/CustomText";
import PinkyButton from "../../src/components/PinkyButton";
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
    <Image
      source={imageSource}
      style={{
        width: 50,
        height: 50,
      }}
      resizeMode="contain"
    />
  );
};

const SummaryScreen = () => {
  const { noteIds, noteEntities, loading } = useSelector(
    (state: RootState) => state.notes
  );

  const categoriesCount: { [key in NoteCategory]: number } = noteIds.reduce(
    (result: { [key in NoteCategory]: number }, id) => {
      const note = noteEntities[id];
      if (note) {
        result[note.category] = (result[note.category] || 0) + 1;
      }
      return result;
    },
    {} as { [key in NoteCategory]: number }
  );

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
            flex: 1,
            padding: 16,
            gap: 16,
            backgroundColor: "#ffffff12",
            marginTop: 26,
            borderRadius: borderRadius.lg,
          }}
        >
          {Object.entries(categoriesCount).map(([category, count]) => (
            <View key={category} style={{ gap: 8 }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <CategoryIcon category={category as NoteCategory} />
                <CustomText variant="categoryHeader" style={{ flex: 1 }}>
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
              <BlurContainer style={{ alignItems: "left" }}>
                <CustomText>{`This topic has a total of ${count} ${
                  count === 1 ? "record" : "records"
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

const styles = StyleSheet.create({});
