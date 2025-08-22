import Chat from "@/components/chat/Chat";
import Badge from "@/components/ui/badge/Badge";
import Input from "@/components/ui/input/Input";
import { EvilIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

const TabsScreen = () => {
  return (
    <View className="bg-white flex-1 p-5">
      <StatusBar style="dark" />
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
      <View className=" p-2 my-2 flex-row gap-2">
        <Badge size="lg" color="neutral">
          All
        </Badge>
        <Badge size="lg" color="neutral">
          Unread
        </Badge>
        <Badge size="lg" color="neutral">
          Favourites
        </Badge>
        <Badge size="lg" color="neutral">
          Groups
        </Badge>

        <Badge size="lg" color="neutral">
          +
        </Badge>
      </View>

      <View className="  gap-6 flex-row items-center">
        <EvilIcons name="archive" size={24} color="black" className="ml-5" />
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
