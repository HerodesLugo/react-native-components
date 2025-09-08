import Accordion from "@/components/ui/accordion/Accordion";
import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";
import {
  ButtonAction,
  ButtonSize,
  ButtonVariant,
} from "@/components/ui/button/types";
import Card from "@/components/ui/card/Card";
import Checkbox from "@/components/ui/checkbox/Checkbox";
import { CheckboxSize } from "@/components/ui/checkbox/types";
import Divider from "@/components/ui/divider/DIvider";
import Fab from "@/components/ui/fab/Fab";
import Icon from "@/components/ui/icon/Icon";
import Input from "@/components/ui/input/Input";
import {
  InputSize,
  InputType,
  InputVariant,
} from "@/components/ui/input/types";
import LinearProgress from "@/components/ui/linearProgress/LinearProgress";
import CustomModal from "@/components/ui/modal/CustomModal";
import { ModalVariant } from "@/components/ui/modal/types";
import { useNotification } from "@/components/ui/notification";
import ProgressBar from "@/components/ui/progressBar/ProgressBar";
import {
  ProgressBarColor,
  ProgressBarSize,
} from "@/components/ui/progressBar/type";
import RadioButton from "@/components/ui/radio/RadioButton";
import { RadioButtonSize } from "@/components/ui/radio/types";
import Select from "@/components/ui/select/Select";
import Skeleton from "@/components/ui/skeleton/Skeleton";
import CustomSlider from "@/components/ui/slider/Slider";
import { useSnackbar } from "@/components/ui/snackbar/hooks/useSnackbar";
import Spinner from "@/components/ui/spinner/Spinner";
import Stepper from "@/components/ui/stepper/Stepper";
import Switch from "@/components/ui/switch/Switch";
import { SwitchSize } from "@/components/ui/switch/types";
import Table from "@/components/ui/table/Table";
import TextArea from "@/components/ui/textArea/TextArea";
import { TextAreaSize } from "@/components/ui/textArea/types";
import { Tooltip } from "@/components/ui/tooltip/Tooltip";
import Wrapper from "@/components/ui/Wrapper";
import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

const PREFERENCES = [
  { id: "newsletter", label: "Recibir boletín informativo" },
  { id: "promotions", label: "Aceptar promociones especiales" },
  { id: "updates", label: "Notificarme sobre actualizaciones" },
];

function CheckSvg({
  size = 20,
  color = "#10B981",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 6L9 17l-5-5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

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
  // Estado para variantes del ProgressBar
  const [pbSize, setPbSize] = useState<ProgressBarSize>("md");
  const [pbColor, setPbColor] = useState<ProgressBarColor>("primary");

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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVariant, setModalVariant] = useState<ModalVariant>("center");

  const openModal = (variant: ModalVariant) => {
    setModalVariant(variant);
    setModalVisible(true);
  };

  const [comment, setComment] = useState("Este es un texto de ejemplo.");

  // Estados para controlar las props del TextArea
  const [isInvalidTextArea, setIsInvalidTextArea] = useState(false);
  const [isDisabledTextArea, setIsDisabledTextArea] = useState(false);
  const [isReadOnlyTextArea, setIsReadOnlyTextArea] = useState(false);
  const [textAreaSize, setTextAreaSize] = useState<TextAreaSize>("md");

  // --- Table example data & columns ---
  const tableColumns = [
    { key: "name", title: "Name", sortable: true },
    { key: "email", title: "Email", sortable: true },
    { key: "role", title: "Role" },
  ];

  const tableData = [
    { id: "1", name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: "2", name: "Bob", email: "bob@example.com", role: "Editor" },
    { id: "3", name: "Carol", email: "carol@example.com", role: "Viewer" },
    { id: "4", name: "Dave", email: "dave@example.com", role: "Editor" },
    { id: "5", name: "Eve", email: "eve@example.com", role: "Admin" },
    { id: "6", name: "Frank", email: "frank@example.com", role: "Viewer" },
  ];

  const { showNotification } = useNotification();

  const buttonAbsoluteValue = useSharedValue(0);
  const buttonAbsoluteAnimation = useAnimatedStyle(() => {
    return {
      opacity: buttonAbsoluteValue.value,
      pointerEvents: buttonAbsoluteValue.value === 0 ? "none" : "auto",
    };
  });

  const handleMoreButtons = () => {
    buttonAbsoluteValue.value = withSpring(
      buttonAbsoluteValue.value === 0 ? 1 : 0
    );
  };

  const { showSnackbar } = useSnackbar();

  return (
    <SafeAreaView className="flex-1 bg-indigo-50 pb-0">
      <ScrollView className="p-4">
        <View className="gap-4 pb-6">
          {/* --- BUTTON --- */}
          <Wrapper label="Button">
            <View className="flex-row items-center mb-3">
              <Text className="flex-1">Variant</Text>
              <Text className="flex-1">Action</Text>
              <Text className="flex-1">Size</Text>
            </View>
            <View className="flex-row gap-2 mb-3">
              <Select
                options={[
                  { label: "Solid", value: "solid" },
                  { label: "Outline", value: "outline" },
                  { label: "Link", value: "link" },
                ]}
                value={buttonVariant}
                placeholder="Variant"
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
                placeholder="Action"
                onChange={(value) => setButtonAction(value as ButtonAction)}
              />
              <Select
                options={[
                  { label: "XS", value: "xs" },
                  { label: "SM", value: "sm" },
                  { label: "MD", value: "md" },
                  { label: "LG", value: "lg" },
                ]}
                value={buttonSize}
                placeholder="Size"
                onChange={(value) => setButtonSize(value as ButtonSize)}
              />
            </View>
            <Button
              variant={buttonVariant}
              action={buttonAction}
              size={buttonSize}
              onPress={() => alert("Button pressed!")}
            >
              <Text className="text-center text-white ">Hello World</Text>
            </Button>

            {/* Examples adicionales mostrando 'as' y combinaciones */}
            <View className="mt-4">
              <Text className="font-semibold mb-2">Examples</Text>
              <View className="space-y-3">
                <View className="flex-row gap-2">
                  <Button onPress={() => alert("Pressable default")}>
                    <Text className="text-center text-white">Pressable</Text>
                  </Button>
                  <Button
                    as="touchableOpacity"
                    onPress={() => alert("TouchableOpacity")}
                  >
                    <Text className="text-center text-white">
                      TouchableOpacity
                    </Text>
                  </Button>
                  <Button
                    as="touchableHighlight"
                    onPress={() => alert("TouchableHighlight")}
                  >
                    <Text className="text-center text-white">
                      TouchableHighlight
                    </Text>
                  </Button>
                </View>

                <View className="flex-row gap-2 mt-2">
                  <Button
                    variant="outline"
                    action="primary"
                    onPress={() => alert("Outline Primary")}
                  >
                    <Text className="text-center">Outline Primary</Text>
                  </Button>
                  <Button
                    as="touchableHighlight"
                    variant="solid"
                    action="negative"
                    onPress={() => alert("Solid Negative")}
                  >
                    <Text className="text-center text-white">Eliminar</Text>
                  </Button>
                  <Button
                    variant="link"
                    action="secondary"
                    onPress={() => alert("Link Secondary")}
                  >
                    <Text className="text-center">Ver más</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Wrapper>

          {/* --- ACCORDION --- */}
          <Wrapper label="Accordion">
            <Text className="mb-2">Single (only one open)</Text>
            <Accordion type="single" size="md" className="mb-4 !bg-white">
              <Accordion.Item id="s1" className="!bg-white" title="Item 1">
                <Text>Contenido del item 1</Text>
              </Accordion.Item>
              <Accordion.Item id="s2" title="Item 2">
                <Text>Contenido del item 2</Text>
              </Accordion.Item>
              <Accordion.Item id="s3" title="Item 3">
                <Text>Contenido del item 3</Text>
              </Accordion.Item>
            </Accordion>

            <Text className="mb-2">Multiple (several open)</Text>
            <Accordion type="multiple" size="sm">
              <Accordion.Item id="m1" title="Item A">
                <Text>Contenido A</Text>
              </Accordion.Item>
              <Accordion.Item id="m2" title="Item B">
                <Text>Contenido B</Text>
              </Accordion.Item>
            </Accordion>
          </Wrapper>

          {/* --- INPUT --- */}
          <Wrapper className="flex-1" label="Input">
            <View className="flex-row items-center mb-3">
              <Text className="flex-1">Variant</Text>
              <Text className="flex-1">Size</Text>
              <Text className="flex-1">Type</Text>
            </View>
            <View className="flex-row gap-2 mb-3">
              <Select
                options={[
                  { label: "Rounded", value: "rounded" },
                  { label: "Outline", value: "outline" },
                  { label: "Underlined", value: "underlined" },
                  { label: "Error", value: "error" },
                ]}
                value={inputVariant}
                placeholder="Variant"
                onChange={(value) => setInputVariant(value as InputVariant)}
              />
              <Select
                options={[
                  { label: "XS", value: "xs" },
                  { label: "SM", value: "sm" },
                  { label: "MD", value: "md" },
                  { label: "LG", value: "lg" },
                ]}
                value={inputSize}
                placeholder="Size"
                onChange={(value) => setInputSize(value as InputSize)}
              />
              <Select
                options={[
                  { label: "Text", value: "text" },
                  { label: "Number", value: "number" },
                ]}
                value={inputType}
                placeholder="Type"
                onChange={(value) => setInputType(value as InputType)}
              />
            </View>
            <Input
              label="Hello World"
              placeholder="Enter Text here..."
              variant={inputVariant}
              size={inputSize}
              type={inputType}
              color="error"
              errorMessage="This field is required"
              invalid={inputVariant === "error"}
            />
          </Wrapper>

          {/* --- SWITCH --- */}
          <Wrapper label="Switch">
            <View className="flex-row items-center mb-3">
              <Text className="flex-1">Size</Text>
              <Select
                options={[
                  { label: "Small", value: "sm" },
                  { label: "Medium", value: "md" },
                  { label: "Large", value: "lg" },
                ]}
                value={switchSize}
                placeholder="Size"
                onChange={(value) => setSwitchSize(value as SwitchSize)}
              />
            </View>
            <View className="flex-row items-center justify-between bg-gray-50 rounded-md p-3">
              <Text>Disable Switch</Text>
              <Switch
                size="md"
                value={switchDisabled}
                onValueChange={setSwitchDisabled}
              />
            </View>
          </Wrapper>

          {/* --- RADIO BUTTON --- */}
          <Wrapper label="Radio Button">
            <View className="flex-row items-center mb-3">
              <Text className="flex-1">Size</Text>
              <Select
                options={[
                  { label: "Small", value: "sm" },
                  { label: "Medium", value: "md" },
                  { label: "Large", value: "lg" },
                ]}
                value={radioSize}
                placeholder="Size"
                onChange={(value) => setRadioSize(value as RadioButtonSize)}
              />
            </View>
            <View className="space-y-2 mb-3">
              <View className="flex-row items-center justify-between bg-gray-50 rounded-md p-3">
                <Text>Invalid State</Text>
                <Switch
                  size="md"
                  value={radioInvalid}
                  onValueChange={setRadioInvalid}
                />
              </View>
              <View className="flex-row items-center justify-between bg-gray-50 rounded-md p-3">
                <Text>Disable Group</Text>
                <Switch
                  size="md"
                  value={radioDisabled}
                  onValueChange={setRadioDisabled}
                />
              </View>
            </View>

            {/* RadioButton Group */}
            <View className="space-y-2">
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
                placeholder="0 - 100"
                value={progress}
                type="number"
                variant="outline"
                onChangeText={setProgress}
              />

              <Select
                options={[
                  { label: "Small", value: "sm" },
                  { label: "Medium", value: "md" },
                  { label: "Large", value: "lg" },
                ]}
                value={pbSize}
                placeholder="Size"
                onChange={(value) => setPbSize(value as ProgressBarSize)}
              />

              <Select
                options={[
                  { label: "Gray", value: "gray" },
                  { label: "Primary", value: "primary" },
                  { label: "Success", value: "success" },
                  { label: "Warning", value: "warning" },
                  { label: "Danger", value: "danger" },
                ]}
                value={pbColor}
                placeholder="Color"
                onChange={(value) => setPbColor(value as ProgressBarColor)}
              />
            </View>

            <View className="flex flex-col gap-2">
              <Text className="mb-2">Preview</Text>
              <ProgressBar
                progress={
                  progress
                    ? Math.max(0, Math.min(parseFloat(progress) / 100, 1))
                    : 0
                }
                size={pbSize}
                color={pbColor}
                className="mb-3"
              />

              <Text className="font-semibold">Examples</Text>
              <View className="gap-5">
                <ProgressBar progress={0.25} size="sm" color="primary" />
                <ProgressBar progress={0.5} size="md" color="success" />
                <ProgressBar progress={0.75} size="lg" color="warning" />
              </View>
            </View>
          </Wrapper>

          {/* --- SPINNER --- */}
          <Wrapper label="Spinner">
            <View className="mb-3">
              <Text className="mb-2">Sizes</Text>
              <View className="flex-row items-center gap-4">
                <Spinner size="xs" />
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
              </View>
            </View>

            <View>
              <Text className="mb-2">Colors</Text>
              <View className="flex-row items-center gap-4">
                <Spinner color="primary" />
                <Spinner color="secondary" />
                <Spinner color="positive" />
                <Spinner color="error" />
                <Spinner color="neutral" />
              </View>
            </View>
          </Wrapper>

          {/* --- TABLE --- */}
          <Wrapper label="Table" className="p-4">
            <Table
              columns={tableColumns}
              data={tableData}
              size="sm"
              sortable
              rowKey="id"
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
            {/* Componente TextArea en acción */}
            <View className="bg-white rounded-lg p-4 shadow mb-4">
              <TextArea
                label="Tus comentarios"
                placeholder="Escribe algo aquí..."
                value={comment}
                onChangeText={setComment}
                size={textAreaSize}
                isInvalid={isInvalidTextArea}
                isDisabled={isDisabledTextArea}
                readOnly={isReadOnlyTextArea}
              />
            </View>

            {/* Controles para probar las variantes */}
            <View className="bg-white rounded-lg p-4 shadow">
              <Text className="font-semibold mb-2">Controles de Variante</Text>

              {/* Control de Tamaño */}
              <View className="flex-row items-center mb-2">
                <Text className="mr-2">Tamaño</Text>
                <Select
                  options={[
                    { label: "Pequeño", value: "sm" },
                    { label: "Mediano", value: "md" },
                    { label: "Grande", value: "lg" },
                  ]}
                  value={textAreaSize}
                  placeholder="Seleccionar tamaño"
                  onChange={(value) => setTextAreaSize(value as TextAreaSize)}
                />
              </View>

              {/* Control de Estado Inválido */}
              <View className="flex-row items-center mb-2">
                <Switch
                  label="Estado Inválido"
                  value={isInvalidTextArea}
                  onValueChange={setIsInvalidTextArea}
                  activeTrackColor="#EF4444"
                />
              </View>

              {/* Control de Deshabilitado */}
              <View className="flex-row items-center mb-2">
                <Switch
                  label="Deshabilitado"
                  value={isDisabledTextArea}
                  onValueChange={setIsDisabledTextArea}
                />
              </View>

              {/* Control de Solo Lectura */}
              <View className="flex-row items-center">
                <Switch
                  label="Solo Lectura"
                  value={isReadOnlyTextArea}
                  onValueChange={setIsReadOnlyTextArea}
                />
              </View>
            </View>
          </Wrapper>

          <Wrapper label="Modal">
            <View>
              <Text>Prueba de Modales</Text>
            </View>

            <View className="gap-2 flex-row">
              <Button
                className="flex-1"
                variant="outline"
                onPress={() => openModal("center")}
              >
                <Text className="text-center">Centrado</Text>
              </Button>
              <Button
                className="flex-1"
                variant="outline"
                onPress={() => openModal("bottom")}
              >
                <Text className="text-center">Bottom Sheet</Text>
              </Button>
              <Button
                className="flex-1"
                variant="outline"
                onPress={() => openModal("full")}
              >
                <Text className="text-center">Modal Completo</Text>
              </Button>
            </View>

            <CustomModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              variant={modalVariant}
            >
              <View>
                <Text>Este es un modal {modalVariant}</Text>
                <Text>
                  Puedes poner cualquier contenido que necesites aquí dentro.
                  ¡Es totalmente personalizable!
                </Text>
                <Button size="lg" onPress={() => setModalVisible(false)}>
                  <Text className="text-white">Cerrar</Text>
                </Button>
              </View>
            </CustomModal>
          </Wrapper>

          <Wrapper label="Badge" className="p-4">
            <Text className="mb-2">Variantes de tamaño y color</Text>
            <View className="flex-row flex-wrap gap-3 mb-3 items-center">
              <Badge size="xs" color="primary">
                New
              </Badge>
              <Badge size="sm" color="secondary">
                Beta
              </Badge>
              <Badge size="md" color="success">
                Success
              </Badge>
              <Badge size="lg" color="warning">
                Warn
              </Badge>
              <Badge
                size="md"
                color="danger"
                icon={<EvilIcons name="star" size={14} color="white" />}
              >
                Hot
              </Badge>
              <Badge
                size="md"
                color="neutral"
                icon={<EvilIcons name="bell" size={14} color="#374151" />}
              >
                Notice
              </Badge>
            </View>
          </Wrapper>

          <Wrapper label="Icon" className="p-4">
            <Text className="mb-2">Variantes y libraries</Text>
            <View className="flex-row items-center gap-3 mb-3">
              <Icon library="Feather" name="camera" />
              <Icon
                library="Ionicons"
                name="ios-checkmark-circle"
                color="#10B981"
              />
              <Icon library="EvilIcons" name="star" color="#F59E0B" />
              <Icon library="FontAwesome" name="heart" color="#EF4444" />
            </View>

            <Text className="mb-2">Tamaños y wrappers</Text>
            <View className="flex-row items-center gap-3 mb-3">
              <Icon svg={<CheckSvg />} size="xs" library="EvilIcons" />
              <Icon size="sm" name="bell" />
              <Icon size="md" name="bell" />
              <Icon size="lg" name="bell" />
              <Pressable onPress={() => alert("Icon pressable")}>
                <Icon name="activity" />
              </Pressable>
            </View>
          </Wrapper>

          <Wrapper label="Toast / Notificaciones">
            <Text className="text-lg mb-4">Disparar Notificaciones</Text>

            <View className="gap-2">
              <Button
                variant="solid"
                action="positive"
                onPress={() =>
                  showNotification({
                    type: "success",
                    title: "¡Bien Hecho!",
                    message: "La operación se completó correctamente.",
                  })
                }
              >
                <Text className="text-center text-white">Éxito</Text>
              </Button>
              <Button
                variant="solid"
                action="negative"
                onPress={() =>
                  showNotification({
                    type: "error",
                    title: "¡Hubo un Error!",
                    message: "No se pudo guardar el archivo.",
                  })
                }
              >
                <Text className="text-center text-white">Error</Text>
              </Button>
              <Button
                variant="solid"
                action="secondary"
                onPress={() =>
                  showNotification({
                    type: "info",
                    title: "Actualización Disponible",
                    duration: 5000, // 5 segundos
                  })
                }
              >
                <Text className="text-center text-white">
                  Información (Larga Duración)
                </Text>
              </Button>
            </View>
          </Wrapper>

          <Wrapper label="Snackbar / Mensajes">
            <Button
              onPress={() => {
                showSnackbar({
                  message: "Este es un mensaje de snackbar",
                  duration: 1000,
                });
              }}
            >
              <Text>Mostrar Snackbar</Text>
            </Button>
          </Wrapper>

          <Wrapper label="Tooltip">
            <Tooltip text="Hola soy un tooltip loveo loveo loveo loveo loveo loveo loveo loveo loveo....">
              <View className="bg-blue-500 p-4 rounded-lg">
                <Text className="text-white font-bold">Tócame</Text>
              </View>
            </Tooltip>
          </Wrapper>

          <Wrapper label="Divider">
            <View className=" p-2 items-center">
              <Divider className="" orientation="horizontal" />
            </View>

            <View className="gap-5">
              <Text>Orientation:</Text>

              <View className="flex-row gap-5">
                <Text>Horizontal</Text>
                <Divider className="" orientation="vertical" />
                <Text>Vertical</Text>
              </View>
            </View>
          </Wrapper>

          <Wrapper label="Stepper">
            <Stepper
              steps={["Cuenta", "Dirección", "Pago", "Confirmación"]}
              currentStep={2}
              onStepPress={(index) => console.log("Step:", index)}
            />
          </Wrapper>

          <Wrapper label="Card">
            <Card className="" size="md" variant="outline">
              <Text>Soy un prueba</Text>
            </Card>

            <View className="flex-row gap-5 my-2">
              <Text>Size: SM MD LG </Text>
              <Divider className="" orientation="vertical" />
              <Text>Variant: transparent - outline - filled</Text>
            </View>
          </Wrapper>

          <Wrapper label="Skeleton">
            <View className="flex-row gap-2">
              <Skeleton borderRadius={5} height={100} width={100} />
              <View className="gap-2.5 justify-center">
                <Skeleton borderRadius={5} width={100} />
                <Skeleton borderRadius={5} width={200} />
                <Skeleton borderRadius={5}  />
              </View>
            </View>
          </Wrapper>


          <Wrapper label="Linear Progress">
            <LinearProgress  duration={3000}  color="#000"/>
          </Wrapper>
        </View>
      </ScrollView>

      <Animated.View
        style={buttonAbsoluteAnimation}
        className="absolute  bottom-28 right-6 gap-2    justify-center items-center"
      >
        <Fab
          icon={<Icon name="trash" library="EvilIcons" color="white" />}
          variant="negative"
          size="md"
          className="relative bottom-0 left-0 top-0 right-0"
          onPress={() => Alert.alert("Fourthy Action")}
        />
        <Fab
          icon={<Icon name="share-google" library="EvilIcons" color="white" />}
          variant="primary"
          size="md"
          className="relative bottom-0 left-0 top-0 right-0"
          onPress={() => Alert.alert("Tertiary Action")}
        />
        <Fab
          icon={<Icon name="tag" library="EvilIcons" color="white" />}
          variant="secondary"
          size="md"
          className="relative bottom-0 left-0 top-0 right-0"
          onPress={() => Alert.alert("Secondary Action")}
        />
        <Fab
          icon={<Icon name="pencil" library="EvilIcons" color="white" />}
          variant="primary"
          size="md"
          className="relative bottom-0 right-0 left-0 top-0"
          onPress={() => Alert.alert("Primary Action")}
        />
      </Animated.View>
      <Fab
        onPress={handleMoreButtons}
        icon={<Icon name="add" library="MaterialIcons" color="white" />}
        variant="positive"
        size="md"
      />
    </SafeAreaView>
  );
}
