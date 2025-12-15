import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, Tabs } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { loadNotes } from "../../src/redux/notesSlice";
import { AppDispatch } from "../../src/redux/store";
import CustomText from "../../src/components/CustomText";

// Component that uses Redux hooks - must be INSIDE Provider
const TabsLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Dispatch loadNotes when the app starts
    dispatch(loadNotes());
  }, [dispatch]);

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "AddNote") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: true,
        headerTitleAlign: "left",
        headerBackground: () => (
          <LinearGradient
            colors={["#280947", "#280841"]}
            locations={[0.0368, 0.9871]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.2 }}
            style={{ flex: 1 }}
          />
        ),
        headerTintColor: "#fff", // White text for all headers

        tabBarBackground: () => (
          <LinearGradient
            colors={["#1C0B37", "#1D0837"]}
            locations={[0, 1]}
            style={{ flex: 1 }}
          />
        ),
        tabBarStyle: {
          borderTopWidth: 0, // Remove the white line
          backgroundColor: "transparent", // Make background transparent to show gradient
        },
      })}
    >
      <Tabs.Screen
        name="index"
        // component={HomeScreen}
        options={({}) => ({
          title: "Home",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push("/settings")}
              style={{ marginRight: 16 }}
            >
              <Ionicons name="settings-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
      <Tabs.Screen
        name="add-note"
        options={({}) => ({
          headerTitle: "",
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
                <Ionicons name="chevron-back-outline" size={24} color="#fff" />
                <CustomText variant="screenTitle">New Note</CustomText>
              </TouchableOpacity>
            );
          },
        })}
      />
      <Tabs.Screen name="summary" />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
