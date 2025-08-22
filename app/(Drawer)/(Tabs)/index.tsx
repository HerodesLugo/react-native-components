import Chat from "@/components/chat/Chat";
import Input from "@/components/ui/input/Input";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const TabsScreen = () => {
  return (
    <View className="bg-white flex-1 p-5">
      <View>
        <Text className="font-bold text-5xl">Chats</Text>
      </View>

      <View className=" mt-3 p-3 relative  flex flex-row items-center bg-[#F8F8F8] rounded-2xl">
        <EvilIcons name="search" size={24} color="black" />
        <Input
          placeholder="Ask Meta AI or Search"
          className=" border-transparent placeholder:text-xl placeholder:text-[#767779] bg-transparent !border-none outline-none rounded-xl flex-1 h-full"
          variant="underlined"
          size="sm"
        />
      </View>
      {/* <View className="border rounded-full p-2 ">
        <Text>Badges</Text>
      </View> */}
      <View className="py-2 justify-center">
        <Text className="text-lg font-bold">Archived</Text>
      </View>
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </View>
  );
};

export default TabsScreen;
