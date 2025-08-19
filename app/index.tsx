import Button from "@/components/button/Button";
import {
  ButtonAction,
  ButtonSize,
  ButtonVariant,
} from "@/components/button/types";
import Checkbox from "@/components/checkbox/Checkbox";
import { CheckboxSize } from "@/components/checkbox/types";
import Input from "@/components/input/Input";
import { InputSize, InputType, InputVariant } from "@/components/input/types";
import CustomModal from "@/components/modal/CustomModal";
import ProgressBar from "@/components/progressBar/ProgressBar";
import RadioButton from "@/components/radio/RadioButton";
import { RadioButtonSize } from "@/components/radio/types";
import Select from "@/components/select/Select";
import CustomSlider from "@/components/slider/Slider";
import Switch from "@/components/switch/Switch";
import { SwitchSize } from "@/components/switch/types";
import TextArea from "@/components/textArea/TextArea";
import Wrapper from "@/components/ui/Wrapper";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

const PREFERENCES = [
  { id: "newsletter", label: "Recibir boletín informativo" },
  { id: "promotions", label: "Aceptar promociones especiales" },
  { id: "updates", label: "Notificarme sobre actualizaciones" },
];

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

  // Estado para RadioButton
  const [selectedValue, setSelectedValue] = useState("apple");
  const [radioSize, setRadioSize] = useState<RadioButtonSize>("md");
  const [radioInvalid, setRadioInvalid] = useState(false);
  const [radioDisabled, setRadioDisabled] = useState(false);

  //Estado para progress
  const [progress, setProgress] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [borderRadius, setBorderRadius] = useState<string>("");
  const [fillColor, setFillColor] = useState<string>("");

  // Estado para los valores de los checkboxes
  const [checkedState, setCheckedState] = useState({
    newsletter: true,
    promotions: false,
    updates: true,
  });

  // Estado para controlar las props del grupo de checkboxes
  const [isInvalid, setIsInvalid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [checkboxSize, setCheckboxSize] = useState<CheckboxSize>("md");

  const handleCheckboxChange = (id: string, newValue: boolean) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: newValue,
    }));
  };

  // Estado para mostrar el Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

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

        {/* --- SWITCH --- */}
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
          <View className="flex-row items-center justify-between bg-gray-100 rounded-md p-2">
            <Text>Disable Switch</Text>
            <Switch
              size="md" // Control switch should be a fixed size
              value={switchDisabled}
              onValueChange={setSwitchDisabled}
            />
          </View>
        </Wrapper>

        {/* --- RADIO BUTTON --- */}
        <Wrapper label="Radio Button">
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
              value={radioSize}
              placeholder="Select size"
              onChange={(value) => setRadioSize(value as RadioButtonSize)}
            />
          </View>
          <View className="flex-row items-center justify-between bg-gray-100 rounded-md p-2 mb-2">
            <Text>Invalid State</Text>
            <Switch
              size="md"
              value={radioInvalid}
              onValueChange={setRadioInvalid}
            />
          </View>
          <View className="flex-row items-center justify-between bg-gray-100 rounded-md p-2 mb-4">
            <Text>Disable Group</Text>
            <Switch
              size="md"
              value={radioDisabled}
              onValueChange={setRadioDisabled}
            />
          </View>

          {/* RadioButton Group */}
          <View>
            <RadioButton
              label="Manzana"
              value="apple"
              selectedValue={selectedValue}
              onSelect={setSelectedValue}
              size={radioSize}
              invalid={radioInvalid}
              disabled={radioDisabled}
            />
            <RadioButton
              label="Naranja"
              value="orange"
              selectedValue={selectedValue}
              onSelect={setSelectedValue}
              size={radioSize}
              invalid={radioInvalid}
              disabled={radioDisabled}
            />
            <RadioButton
              label="Banana"
              value="banana"
              selectedValue={selectedValue}
              onSelect={setSelectedValue}
              size={radioSize}
              invalid={radioInvalid}
              disabled={radioDisabled}
            />
          </View>
        </Wrapper>

        {/* --- PROGRESS BAR --- */}
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
            backgroundColor={backgroundColor || "#e0e0e0"}
            borderRadius={borderRadius ? parseFloat(borderRadius) : 8}
            fillColor={fillColor || "#3b82f6"}
            height={20}
            progress={progress ? parseFloat(progress) : 0}
          />
        </Wrapper>

        {/* --- SELECT --- */}
        <Wrapper label="Select">
          <Select
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
            ]}
            value=""
            placeholder="Select an option"
            onChange={(value) => alert(`Selected: ${value}`)}
          />
        </Wrapper>

        {/* --- SLIDER --- */}
        <Wrapper label="Slider">
          <CustomSlider
            height={20}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#c11c1c"
            maximumTrackTintColor="#513636"
            thumbTintColor="#0000FF"
          />
        </Wrapper>

        <Wrapper label="Checkbox">
          {/* Grupo de Checkboxes */}

          <View>
            <Text>Tus suscripciones</Text>
            {PREFERENCES.map((item) => (
              <Checkbox
                key={item.id}
                label={item.label}
                value={checkedState[item.id as keyof typeof checkedState]}
                onValueChange={(newValue) =>
                  handleCheckboxChange(item.id, newValue)
                }
                size={checkboxSize}
                invalid={isInvalid}
                disabled={isDisabled}
              />
            ))}
          </View>

          {/* Controles para probar las variantes */}
          <View className="my-4">
            <Text>Controles de Variante</Text>

            {/* Control de Tamaño */}
            <View className="my-2">
              <Text>Tamaño</Text>
              <Select
                options={[
                  { label: "Pequeño", value: "sm" },
                  { label: "Mediano", value: "md" },
                  { label: "Grande", value: "lg" },
                ]}
                value={checkboxSize}
                placeholder="Seleccionar tamaño"
                onChange={(value) => setCheckboxSize(value as CheckboxSize)}
              />
            </View>

            <View>
              <Switch
                label="Estado Inválido"
                value={isInvalid}
                onValueChange={setIsInvalid}
                activeTrackColor="#EF4444"
              />
            </View>

            <View className="my-2">
              <Switch
                label="Deshabilitar Grupo"
                value={isDisabled}
                onValueChange={setIsDisabled}
              />
            </View>
          </View>
        </Wrapper>

        <Wrapper label="Text Area">
          <TextArea />
        </Wrapper>

        <Wrapper label="Modal">
          <Button className="my-5" onPress={() => setIsModalVisible(true)}>
            <Text className="text-center">Show Modal</Text>
          </Button>

          <CustomModal onClose={() => setIsModalVisible(false)} visible={isModalVisible}>
            <Text className="text-center">Holita que tal</Text>
            <Button variant="outline" className="my-2" onPress={() => setIsModalVisible(false)}>
              <Text className="text-center text-black">Close Modal</Text>
            </Button>
          </CustomModal>
        </Wrapper>
      </View>
    </ScrollView>
  );
}
