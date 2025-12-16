import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Provider, useDispatch } from "react-redux";
import ScreenBackground from "../src/components/screen/ScreenBackground";
import { loadNotes } from "../src/redux/notesSlice";
import { AppDispatch, store } from "../src/redux/store";
import { toastConfig } from "../src/config/toast";

// Component that uses Redux hooks - must be INSIDE Provider
const RootLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Dispatch loadNotes when the app starts
    dispatch(loadNotes());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <ScreenBackground>
        <Stack
          screenOptions={({ route }) => ({
            headerBackground: () => (
              <LinearGradient
                colors={["#280947", "#280841"]}
                locations={[0.0368, 0.9871]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0.2 }}
                style={{ flex: 1 }}
              />
            ),
          })}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <Toast config={toastConfig} />
      </ScreenBackground>
    </Provider>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "PF ExtraLight": require("../assets/fonts/PingFang-ExtraLight.ttf"),
    "PF Light": require("../assets/fonts/PingFang-Light.ttf"),
    "PF Regular": require("../assets/fonts/PingFang-Regular.ttf"),
    "PF Medium": require("../assets/fonts/PingFang-Medium.ttf"),
    "PF Bold": require("../assets/fonts/PingFang-Bold.ttf"),
    "PF Heavy": require("../assets/fonts/PingFang-Heavy.ttf"),
  });

  if (!fontsLoaded)
    return (
      //Loading spinner
      <Text>Loading fonts...</Text>
    );
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
