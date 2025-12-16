import React, { useEffect } from "react";
import { Image, SectionList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import CustomText from "../../src/components/CustomText";
import NoteListItem from "../../src/components/NoteListItem";
import { RootState } from "../../src/redux/store";
import { Note, NoteCategory } from "../../src/types/note";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CategoryIcon = ({ category }: { category: NoteCategory }) => {
  let imageSource;
  switch (category) {
    case "Health and Wellness":
      imageSource = require("../../assets/icons/homeTab/home-health.png");
      break;
    case "Life":
      imageSource = require("../../assets/icons/homeTab/home-life.png");
      break;
    case "Work and Study":
      imageSource = require("../../assets/icons/homeTab/home-workstudy.png");
      break;
  }

  return (
    <Image
      source={imageSource}
      style={{
        width: 20,
        height: 20,
      }}
      resizeMode="contain"
    />
  );
};

const HomeScreen = () => {
  const { noteIds, noteEntities, loading } = useSelector(
    (state: RootState) => state.notes
  );
  const [sections, setSections] = React.useState<
    { title: NoteCategory; data: Note[] }[]
  >([]);

  useEffect(() => {
    const categorized: Record<NoteCategory, Note[]> = {
      "Work and Study": [],
      Life: [],
      "Health and Wellness": [],
    };

    for (const id of noteIds) {
      const note = noteEntities[id];
      if (!note) continue;

      const displayArr = categorized[note.category];

      if (displayArr.length < 3) {
        displayArr.push(note);
      } else {
        let oldest = 0;
        for (let i = 1; i < displayArr.length; i++) {
          if (displayArr[i].createdAt < displayArr[oldest].createdAt)
            oldest = i;
        }
        if (note.createdAt > displayArr[oldest].createdAt) {
          displayArr[oldest] = note;
        }
      }
    }

    const newSections = Object.keys(categorized).map((category) => ({
      title: category as NoteCategory,
      data: categorized[category as NoteCategory].sort(
        (a, b) => b.createdAt - a.createdAt
      ),
    }));

    setSections(newSections);
  }, [noteIds, noteEntities]);

  return (
    <View style={styles.wrapper}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NoteListItem>{item}</NoteListItem>}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <CategoryIcon category={title as NoteCategory} />
            <CustomText variant="categoryHeader">{title}</CustomText>
          </View>
        )}
        contentContainerStyle={{ gap: 12 }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.recentCreated}>
            <MaterialCommunityIcons
              name="clock-time-three-outline"
              size={20}
              color="#fff"
            />
            <CustomText variant="categoryHeader">
              Recently created notes
            </CustomText>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 16,
  },
  recentCreated: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
