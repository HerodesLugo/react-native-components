import Button from "@/components/button/Button";
import {
  ButtonAction,
  ButtonSize,
  ButtonVariant,
} from "@/components/button/types";
import Input from "@/components/input/Input";
import { InputSize, InputType, InputVariant } from "@/components/input/types";
import Select from "@/components/select/Select";
import Wrapper from "@/components/ui/Wrapper";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  // const [sliderValue, setSliderValue] = useState(0);
  const [buttonVariant, setButtonVariant] = useState<ButtonVariant>("solid");
  const [buttonAction, setButtonAction] = useState<ButtonAction>("positive");
  const [buttonSize, setButtonSize] = useState<ButtonSize>("md");

  // Estado para variantes de Input
  const [inputVariant, setInputVariant] = useState<InputVariant>("rounded");
  const [inputSize, setInputSize] = useState<InputSize>("md");
  const [inputType, setInputType] = useState<InputType>("text");

  return (
    <View className="p-5 gap-4 flex-1 ">
      <StatusBar style="light" />
      {/* TODO:BUTTON */}
      <Wrapper className="gap-4" label="Button">
        <View className="flex flex-row">
          <Text className="flex-1">Variant</Text>
          <Text className="flex-1">Action</Text>
          <Text className="flex-1">Size</Text>
        </View>
        <View className="flex flex-row gap-1">
          <Select
            options={[
              { label: "Solid", value: "solid" },
              { label: "Outline", value: "outline" },
              { label: "Link", value: "link" },
            ]}
            value={buttonVariant}
            placeholder="Select variant"
            onChange={(value) => setButtonVariant(value as ButtonVariant)}
          />
          <Select
            options={[
              { label: "Primary", value: "primary" },
              { label: "Secondary", value: "secondary" },
              { label: "Negative", value: "negative" },
              { label: "Positive", value: "positive" },
            ]}
            value={buttonAction}
            placeholder="Select action"
            onChange={(value) => setButtonAction(value as ButtonAction)}
          />
          <Select
            options={[
              { label: "Extra Small", value: "xs" },
              { label: "Small", value: "sm" },
              { label: "Medium", value: "md" },
              { label: "Large", value: "lg" },
            ]}
            value={buttonSize}
            placeholder="Select size"
            onChange={(value) => setButtonSize(value as ButtonSize)}
          />
        </View>
        <Button
          variant={buttonVariant}
          action={buttonAction}
          size={buttonSize}
          onPress={() => alert("Button pressed!")}
        >
          <Text className="text-center text-black">Hello World</Text>
        </Button>
      </Wrapper>
      {/* TODO:INPUT */}
      <Wrapper label="Input">
        <View className="flex-row my-2">
          <Text className="flex-1">Variant</Text>
          <Text className="flex-1">Size</Text>
          <Text className="flex-1">Type</Text>
        </View>
        <View className="flex flex-row gap-1 mb-2">
          <Select
            options={[
              { label: "Rounded", value: "rounded" },
              { label: "Outline", value: "outline" },
              { label: "Underlined", value: "underlined" },
              { label: "Error", value: "error" },
            ]}
            value={inputVariant}
            placeholder="Select variant"
            onChange={(value) => setInputVariant(value as InputVariant)}
          />
          <Select
            options={[
              { label: "Extra Small", value: "xs" },
              { label: "Small", value: "sm" },
              { label: "Medium", value: "md" },
              { label: "Large", value: "lg" },
            ]}
            value={inputSize}
            placeholder="Select size"
            onChange={(value) => setInputSize(value as InputSize)}
          />
          <Select
            options={[
              { label: "Text", value: "text" },
              { label: "Number", value: "number" },
            ]}
            value={inputType}
            placeholder="Select Input Type"
            onChange={(value) => setInputType(value as InputType)}
          />
        </View>
        <Input
          label="Hello World"
          placeholder="Enter Text here..."
          variant={inputVariant}
          size={inputSize}
          type={inputType}
          invalid={inputVariant === "error"}
        />
      </Wrapper>
      {/* TODO:INPUT */}
      {/* ...resto del código comentado... */}
    </View>
  );
}
