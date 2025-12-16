import React from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import CustomText from "../../src/components/CustomText";
import NavListItem from "../../src/components/NavListItem";
import ButtonTabBar from "../../src/components/screen/ButtonTabBar";
import ScreenBackground from "../../src/components/screen/ScreenBackground";
import { deleteAllNotes } from "../../src/redux/notesSlice";
import { AppDispatch } from "../../src/redux/store";
import { Settings, SettingServices } from "../../src/types/note";
import Toast from "react-native-toast-message";
import { bottomTabBarHeight } from "../../theme/screenLayout";
import Modal from "../../src/components/modal";

const CategoryIcon = ({ category }: { category: SettingServices }) => {
  let imageSource;
  switch (category) {
    case "aboutUs":
      imageSource = require("../../assets/icons/settingTab/setting-about-us.png");
      break;
    case "customerService":
      imageSource = require("../../assets/icons/settingTab/setting-online-customer.png");
      break;
    case "privacyPolicy":
      imageSource = require("../../assets/icons/settingTab/setting-privacy-policy.png");
      break;
    case "userAgreement":
      imageSource = require("../../assets/icons/settingTab/setting-user-agreement.png");
      break;
  }
  return (
    <Image
      source={imageSource}
      style={{
        width: 30,
        height: 30,
      }}
      resizeMode="contain"
    />
  );
};

const SettingsScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [modalVisible, setModalVisible] = React.useState(false);

  const showToast = () => {
    Toast.show({
      type: "tomatoToast",
      text1: "All notes have been cleared",
      position: "bottom",
      bottomOffset: bottomTabBarHeight + 20,
    });
  };

  return (
    <ScreenBackground style={styles.container}>
      <FlatList
        data={Object.keys(Settings)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <NavListItem
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
            }}
          >
            <CategoryIcon category={item as SettingServices} />
            <CustomText>{Settings[item as SettingServices].name}</CustomText>
          </NavListItem>
        )}
        contentContainerStyle={{ gap: 12 }}
        style={styles.servicesList}
      />
      {/* Delete all notes Button */}
      <ButtonTabBar
        label="Delete all notes"
        onPress={() => {
          setModalVisible(true);
          // showToast();
          // dispatch(deleteAllNotes())
        }}
      />
      {modalVisible && (
        <Modal
          title="Are you sure you want to delete all notes?"
          setModalVisible={setModalVisible}
          onConfirm={() => {
            dispatch(deleteAllNotes());
            setModalVisible(false);
            showToast();
          }}
          cancellable={false}
        />
      )}
    </ScreenBackground>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  servicesList: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
});
