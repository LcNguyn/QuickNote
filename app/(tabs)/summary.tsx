import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import CustomText from "../../src/components/CustomText";
import { RootState } from "../../src/redux/store";

const SummaryScreen = () => {
  const { notes, loading } = useSelector((state: RootState) => state.notes);
  const categoriesCount = notes.reduce(
    (acc: { [key: string]: number }, note) => {
      acc[note.category] = (acc[note.category] || 0) + 1;
      return acc;
    },
    {}
  );

  //Show categories with number of notes in each category
  return (
    <>
      {loading ? (
        <>
          <CustomText>Loading...</CustomText>
        </>
      ) : (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <CustomText style={{ marginBottom: 16 }}>Summary</CustomText>
          {Object.entries(categoriesCount).map(([category, count]) => (
            <CustomText key={category} style={{ fontSize: 18 }}>
              {category}: {count}
            </CustomText>
          ))}
        </SafeAreaView>
      )}
    </>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({});
