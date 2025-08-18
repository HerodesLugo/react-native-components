import Button from "@/components/button/Button";
import {
  ButtonAction,
  ButtonSize,
  ButtonVariant,
} from "@/components/button/types";
import Input from "@/components/input/Input";
import { InputSize, InputType, InputVariant } from "@/components/input/types";
import ProgressBar from "@/components/progressBar/ProgressBar";
import Select from "@/components/select/Select";
import Switch from "@/components/switch/Switch";
import { SwitchSize } from "@/components/switch/types";
import Wrapper from "@/components/ui/Wrapper";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  // Estado para Button
  const [buttonVariant, setButtonVariant] = useState<ButtonVariant>("solid");
  const [buttonAction, setButtonAction] = useState<ButtonAction>("positive");
  const [buttonSize, setButtonSize] = useState<ButtonSize>("md");

  // Estado para Input
  const [inputVariant, setInputVariant] = useState<InputVariant>("rounded");
  const [inputSize, setInputSize] = useState<InputSize>("md");
  const [inputType, setInputType] = useState<InputType>("text");

  // Estado para Switch
  const [switchDisabled, setSwitchDisabled] = useState(false);
  const [switchSize, setSwitchSize] = useState<SwitchSize>("md");

  //Estado para progress
  const [progress, setProgress] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [borderRadius, setBorderRadius] = useState<string>("");
  const [fillColor, setFillColor] = useState<string>("");

  return (
    <ScrollView className="p-5 flex-1 flex flex-col ">
      <View className="gap-4">
        <StatusBar style="light" />

        {/* --- BUTTON --- */}
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

        {/* --- INPUT --- */}
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

        {/* TODO: SWITCH --- */}
        <Wrapper label="Switch">
          <View className="flex-row my-2">
            <Text className="flex-1">Size</Text>
          </View>
          <View className="flex flex-row gap-1 mb-4">
            <Select
              options={[
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
              ]}
              value={switchSize}
              placeholder="Select size"
              onChange={(value) => setSwitchSize(value as SwitchSize)}
            />
          </View>

          {/* Control para deshabilitar el switch principal */}
          <View className="flex-row items-center justify-between  bg-gray-100 rounded-md">
            <Text>Disable Switch</Text>
            <Switch
              size={switchSize}
              value={switchDisabled}
              onValueChange={setSwitchDisabled}
            />
          </View>
        </Wrapper>
        
        {/* Progress Bar */}
        <Wrapper label="Progress Bar" className="p-5 gap-4">
          <View className="flex flex-row gap-2">
            <Input
              label="Progress"
              placeholder="Enter progress percentage"
              value={progress}
              type="number"
              variant="outline"
              onChangeText={setProgress}
            />
            <Input
              label="Background Color"
              placeholder="Enter background color"
              value={backgroundColor}
              onChangeText={setBackgroundColor}
              variant="outline"
            />
          </View>
          <View className="flex flex-row gap-2">
            <Input
              label="Border Radius"
              placeholder="Enter border radius"
              variant="outline"
              type="number"
              value={borderRadius}
              onChangeText={setBorderRadius}
            />
            <Input
              label="Fill Color"
              placeholder="Enter fill color"
              variant="outline"
              value={fillColor}
              onChangeText={setFillColor}
            />
          </View>
          <ProgressBar
            backgroundColor="#e0e0e0"
            borderRadius={borderRadius ? parseFloat(borderRadius) : 0}
            fillColor="#3b82f6"
            height={20}
            progress={progress ? parseFloat(progress) : 0}
          />
        </Wrapper>
      </View>
    </ScrollView>
  );
}
