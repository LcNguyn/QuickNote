import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Alert,
  Modal as RNModal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import borderRadius from "../../../theme/borderRadius";
import { useTheme } from "../../hooks/useTheme";
import CustomText from "../CustomText";
import PinkyButton from "../PinkyButton";

const Modal = ({
  title,
  content,
  visible,
  setModalVisible,
  confirmLabel = "OK",
  onConfirm,
  cancellable = true,
}: {
  title: string;
  content?: string;
  visible: boolean;
  confirmLabel?: string;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => void;
  cancellable?: boolean;
}) => {
  const theme = useTheme();
  return (
    <>
      {visible ? (
        <View style={styles.centeredView}>
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
                colors={theme.gradient.modalBg}
                locations={[0, 1]}
                style={styles.modalView}
              >
                <CustomText variant="modalTitle">{title}</CustomText>
                {content && <CustomText>{content}</CustomText>}

                <View style={styles.buttonsContainer}>
                  <PinkyButton
                    size="md"
                    label={confirmLabel}
                    onPress={onConfirm}
                  />
                  {cancellable && (
                    <TouchableOpacity
                      style={{
                        ...styles.cancelButton,
                        borderColor: theme.colors.border,
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
        </View>
      ) : (
        <></>
      )}
    </>
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
    gap: 20,
  },
  cancelButton: {
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 34,
    width: 70,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignContent: "flex-end",
    width: "100%",
    justifyContent: "space-between",
  },
});
