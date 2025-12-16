import { ParamListBase, RouteProp } from "@react-navigation/native";
import { router, Tabs } from "expo-router";
import { useCallback, useEffect, useMemo } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import SettingGear from "../../src/components/customIcons/SettingGear";
import HeaderWithBack from "../../src/screens/common/HeaderWithBack";
import ScreenBackground from "../../src/screens/common/ScreenBackground";
import ScreenHeaderBg from "../../src/screens/common/ScreenHeaderBg";
import TabBarBackground from "../../src/screens/common/TabBarBackground";
import { useTheme } from "../../src/hooks/useTheme";
import { loadNotes } from "../../src/redux/notesSlice";
import { AppDispatch } from "../../src/redux/store";
import { textVariants } from "../../theme/typography";

// Component that uses Redux hooks - must be INSIDE Provider
const TabsLayout = () => {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    // Dispatch loadNotes when the app starts
    dispatch(loadNotes());
  }, [dispatch]);

  const HEADER_HEIGHT = 68;
  const totalHeaderHeight = insets.top + HEADER_HEIGHT; // Status bar + header

  const getTabBarIcon = useCallback(
    ({
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
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
      );
    },
    []
  );

  const screenOptions = useCallback(
    ({ route }: { route: RouteProp<ParamListBase, string> }) => ({
      //HEADER OPTIONS
      headerShown: true,
      headerTitleAlign: "left" as const,
      headerTitleStyle: {
        ...textVariants.screenTitle,
        color: theme.colors.headerTitle,
      },
      headerBackground: () => <ScreenHeaderBg />,
      headerTintColor: theme.colors.headerTitle as string,
      headerStyle: { height: totalHeaderHeight },
      //TAB BAR OPTIONS
      tabBarBackground: () => <TabBarBackground />,
      tabBarStyle: { ...styles.tabBar, height: theme.tabBarHeight },
      tabBarItemStyle: {
        marginTop: 20,
      },
      tabBarLabelStyle: {
        fontSize: 14,
        marginTop: 16,
      },
      tabBarIcon: ({
        focused,
        color,
        size,
      }: {
        focused: boolean;
        color: string;
        size: number;
      }) => getTabBarIcon({ route, focused, color, size }),
      tabBarInactiveTintColor: theme.colors.tabBarInactive as string,
      tabBarActiveTintColor: theme.colors.tabBarActive as string,
      sceneStyle: { backgroundColor: "transparent" },
    }),
    [theme, totalHeaderHeight, getTabBarIcon]
  );

  return (
    <ScreenBackground>
      <Tabs screenOptions={screenOptions}>
        <Tabs.Screen
          name="index"
          options={useMemo(
            () => ({
              title: "Home",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => router.push("/settings")}
                  style={styles.homeScreenTitle}
                >
                  <SettingGear size={24} />
                </TouchableOpacity>
              ),
            }),
            []
          )}
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
                style={styles.summaryScreenRobot}
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
  tabBar: {
    borderTopWidth: 0,
    backgroundColor: "transparent",
  },
  image: {
    width: 50,
    height: 50,
  },
  homeScreenTitle: {
    marginRight: 16,
  },
  summaryScreenRobot: {
    flex: 1,
  },
});
