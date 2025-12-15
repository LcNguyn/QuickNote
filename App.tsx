import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Provider, useDispatch } from "react-redux";
import { loadNotes } from "./src/redux/notesSlice";
import { AppDispatch, store } from "./src/redux/store";
import AddNoteScreen from "./src/screens/AddNoteScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import SummaryScreen from "./src/screens/SummaryScreen";

const Tab = createBottomTabNavigator();

// Component that uses Redux hooks - must be INSIDE Provider
function AppContent() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Dispatch loadNotes when the app starts
    dispatch(loadNotes());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Tab.Navigator
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
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: "Home",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Settings")}
                style={{ marginRight: 16 }}
              >
                <Ionicons name="settings-outline" size={24} color="#007AFF" />
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen name="AddNote" component={AddNoteScreen} />
        <Tab.Screen name="Summary" component={SummaryScreen} />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarButton: () => null, // Hide from tab bar
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
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
