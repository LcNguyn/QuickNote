import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { SafeAreaView } from "react-native-safe-area-context";

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
          <CustomText
            style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}
          >
            Summary
          </CustomText>
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
