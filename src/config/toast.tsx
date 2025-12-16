// App.jsx
import { LinearGradient } from "expo-linear-gradient";
import borderRadius from "../../theme/borderRadius";
import CustomText from "../components/CustomText";
import { ToastConfig } from "react-native-toast-message";

/*
  1. Create the config
*/
export const toastConfig: ToastConfig = {
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  tomatoToast: ({ text1, props }) => (
    // <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>

    // </View>
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
