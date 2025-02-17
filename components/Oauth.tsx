import { Image, Text, View } from "react-native";
import CustomButton from "./custom-button";
import icons from "@/constants/icons";
import { useCallback } from "react";
import { useSSO } from "@clerk/clerk-expo";
import { router } from "expo-router";

const OAuth = () => {
  const { startSSOFlow } = useSSO();

  const handleGoogleSignIn = useCallback(async () => {
    try {
      // Start the authentication process by calling `startSSOFlow()`
      const { createdSessionId, setActive, signUp } = await startSSOFlow({
        strategy: "oauth_google",
      });

      // If sign in was successful, set the active session
      if (createdSessionId) {
        if (signUp?.createdUserId) {
          await setActive!({ session: createdSessionId });
          router.push("/(root)/(tabs)/home");
        }
        return {
          success: true,
          code: "success",
          message: "You have successfully signed in with Google",
        };
      } else {
        return {
          success: false,
          message: "An error occurred while signing in with Google",
        };
      }
    } catch (err: any) {
      console.error(err);
      return {
        success: false,
        code: err.code,
        message: err?.errors[0]?.longMessage,
      };
    }
  }, []);

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-gray-300" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-gray-300" />
      </View>

      <CustomButton
        title="Log In with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
