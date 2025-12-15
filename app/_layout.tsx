import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Provider, useDispatch } from "react-redux";
import { loadNotes } from "../src/redux/notesSlice";
import { AppDispatch, store } from "../src/redux/store";
import CustomText from "../src/components/CustomText";

// Component that uses Redux hooks - must be INSIDE Provider
const RootLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Dispatch loadNotes when the app starts
    dispatch(loadNotes());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="settings"
          options={({}) => ({
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#1B284F", // Apply to all headers
            },
            headerTintColor: "#fff", // White text for all headers
            //custom back button
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={{
                    marginRight: 16,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="chevron-back-outline"
                    size={24}
                    color="#fff"
                  />
                  <CustomText>Settings</CustomText>
                </TouchableOpacity>
              );
            },
          })}
        />
      </Stack>
    </Provider>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <RootLayout />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
