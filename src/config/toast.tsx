import { LinearGradient } from "expo-linear-gradient";
import { ToastConfig } from "react-native-toast-message";
import borderRadius from "../../theme/borderRadius";
import CustomText from "../components/CustomText";

export const toastConfig: ToastConfig = {
  modalToast: ({ text1 }) => (
    <LinearGradient
      colors={["#C724E1", "#4E22CC"]}
      locations={[0.0368, 0.9871]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0.2 }}
      style={{
        flex: 1,
        borderRadius: borderRadius.lg,
        paddingHorizontal: 16,
        paddingVertical: 10,
      }}
    >
      <CustomText>{text1}</CustomText>
    </LinearGradient>
  ),
};
