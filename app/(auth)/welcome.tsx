import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { router } from "expo-router";
import CustomButton from "@/components/custom-button";

const Welcome = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          gap: 16,
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={images.onboarding}
          resizeMode="cover"
          className="w-full h-4/6"
        />
        <View className="px-10 w-full items-center">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome To Real Scout
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer To {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
        </View>
        <CustomButton
          title={"Get Started"}
          onPress={() => router.replace("/(auth)/sign-up")}
          className="w-3/4 mb-10  "
          bgVariant="primary"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
