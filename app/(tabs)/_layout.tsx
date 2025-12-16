import { Ionicons } from "@expo/vector-icons";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { router, Tabs } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import HeaderWithBack from "../../src/components/screen/HeaderWithBack";
import ScreenBackground from "../../src/components/screen/ScreenBackground";
import ScreenHeaderBg from "../../src/components/screen/ScreenHeaderBg";
import TabBarBackground from "../../src/components/screen/TabBarBackground";
import { loadNotes } from "../../src/redux/notesSlice";
import { AppDispatch } from "../../src/redux/store";
import { bottomTabBarHeight } from "../../theme/screenLayout";
import { textVariants } from "../../theme/typography";
import SettingGear from "../../src/components/customIcons/SettingGear";

// Component that uses Redux hooks - must be INSIDE Provider
const TabsLayout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    // Dispatch loadNotes when the app starts
    dispatch(loadNotes());
  }, [dispatch]);

  const HEADER_HEIGHT = 68;
  const totalHeaderHeight = insets.top + HEADER_HEIGHT; // Status bar + header

  const getTabBarIcon = ({
    route,
    focused,
  }: {
    route: RouteProp<ParamListBase, string>;
    focused: boolean;
    color: string;
    size: number;
  }) => {
    let imageSource;

    switch (route.name) {
      case "index":
        imageSource = focused
          ? require("../../assets/icons/tabBar/home-active.png")
          : require("../../assets/icons/tabBar/home-inactive.png");
        break;
      case "summary":
        imageSource = focused
          ? require("../../assets/icons/tabBar/summary-active.png")
          : require("../../assets/icons/tabBar/summary-inactive.png");
        break;
      case "add-note":
      default:
        imageSource = require("../../assets/icons/tabBar/add-note.png");
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

  return (
    <ScreenBackground>
      <Tabs
        screenOptions={({ route }) => ({
          //HEADER OPTIONS
          headerShown: true,
          headerTitleAlign: "left",
          headerTitleStyle: textVariants.screenTitle,
          headerBackground: () => <ScreenHeaderBg />,
          headerTintColor: "#fff", // White text for all headers
          headerStyle: { height: totalHeaderHeight },
          //TAB BAR OPTIONS
          tabBarBackground: () => <TabBarBackground />,
          tabBarStyle: { ...styles.tabBar, height: bottomTabBarHeight },
          tabBarItemStyle: {
            marginTop: 20, // Add vertical padding to space out content
          },
          tabBarLabelStyle: {
            fontSize: 14,
            marginTop: 16, // Add space between icon and label
          },
          tabBarIcon: ({ focused, color, size }) =>
            getTabBarIcon({ route, focused, color, size }),
          tabBarInactiveTintColor: "#A6A6A6",
          tabBarActiveTintColor: "#F94695",
          sceneStyle: { backgroundColor: "transparent" },
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
                <SettingGear size={24} />
              </TouchableOpacity>
            ),
          })}
        />
        <Tabs.Screen
          name="add-note"
          options={({}) => ({
            title: "",
            tabBarItemStyle: { marginTop: 40 }, // Center the icon
            tabBarStyle: { display: "none" },
            headerTitle: "",
            headerLeft: () => <HeaderWithBack label="Add Note" />,
          })}
        />
        <Tabs.Screen
          name="summary"
          options={{
            title: "Summary",
            headerTitle: "Summary",
            headerBackground: () => <></>,
            headerRight: () => (
              <Image
                source={require("../../assets/icons/summaryTab/robot.png")}
                style={{ flex: 1 }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            href: null,
            tabBarStyle: { display: "none" },
            headerTitle: "",
            headerLeft: () => <HeaderWithBack label="Settings" />,
          }}
        />
      </Tabs>
    </ScreenBackground>
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
  tabBar: {
    borderTopWidth: 0, // Remove the white line
    backgroundColor: "transparent",
    justifyContent: "center",
    alignContent: "center", // Make background transparent to show gradient
  },
});
