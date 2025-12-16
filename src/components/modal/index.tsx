import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Alert,
  Modal as RNModal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import borderRadius from "../../../theme/borderRadius";
import CustomText from "../CustomText";
import PinkyButton from "../PinkyButton";

const Modal = ({
  title,
  setModalVisible,
  onConfirm,
  cancellable = true,
}: {
  title: string;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => void;
  cancellable?: boolean;
}) => {
  return (
    <SafeAreaView style={styles.centeredView}>
      <RNModal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <LinearGradient
            colors={["#321560ff", "#482b6cff"]}
            locations={[0, 1]}
            style={styles.modalView}
          >
            <CustomText variant="modalTitle">{title}</CustomText>
            <View
              style={{
                flexDirection: "row",
                alignContent: "flex-end",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <PinkyButton
                size="md"
                label="Delete Permanently"
                onPress={onConfirm}
              />
              {cancellable && (
                <TouchableOpacity
                  style={{
                    borderRadius: borderRadius.lg,
                    borderWidth: 1,
                    borderColor: "#FFFFFF1F",
                    paddingHorizontal: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 34,
                    width: 70,
                  }}
                  onPress={() => setModalVisible(false)}
                >
                  <CustomText>Cancel</CustomText>
                </TouchableOpacity>
              )}
            </View>
          </LinearGradient>
        </View>
      </RNModal>
    </SafeAreaView>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    width: "100%",
    height: "100%",
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
