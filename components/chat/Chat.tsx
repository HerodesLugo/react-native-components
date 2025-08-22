import Fernando from "@/assets/fernando.png";
import React from "react";
import { Text, View } from "react-native";
import Avatar from "../ui/avatar/Avatar";

const Chat: React.FC = () => {
  return (
    <>
      <View className=" flex flex-row items-center gap-3 my-3">
        <View className="w-14"></View>
        <View className="w-full bg-[#DFDFDF] h-0.5"></View>
      </View>

      <View className="flex-row  gap-3 my-2 ">
        <Avatar source={Fernando} size="lg" />

        <View className="flex-row justify-between flex-1 ">
          <View className="">
            <Text className="text-xl font-bold">Bercher</Text>
            <Text className="text-base">Hi sir!</Text>
          </View>
          <Text className="text-gray-500">10:30 AM</Text>
        </View>
      </View>
      
    </>
  );
};

export default Chat;
