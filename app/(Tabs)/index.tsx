import {
  ButtonAction,
  ButtonSize,
  ButtonVariant,
} from "@/components/button/types";
import { CheckboxSize } from "@/components/checkbox/types";
import { InputSize, InputType, InputVariant } from "@/components/input/types";
import { ModalVariant } from "@/components/modal/types";
import { RadioButtonSize } from "@/components/radio/types";
import { SwitchSize } from "@/components/switch/types";
import { TextAreaSize } from "@/components/textArea/types";
import { useState } from "react";
import { ScrollView } from "react-native";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVariant, setModalVariant] = useState<ModalVariant>("center");
  const [backdropClass, setBackdropClass] = useState("bg-black/40");

  const openModal = (variant: ModalVariant) => {
    setModalVariant(variant);
    // Cambiamos el fondo si es el bottom sheet para demostrar la funcionalidad
    if (variant === "bottom") {
      setBackdropClass("bg-blue-900/50");
    } else {
      setBackdropClass("bg-black/40");
    }
    setModalVisible(true);
  };

  const [comment, setComment] = useState("Este es un texto de ejemplo.");

  // Estados para controlar las props del TextArea
  const [isInvalidTextArea, setIsInvalidTextArea] = useState(false);
  const [isDisabledTextArea, setIsDisabledTextArea] = useState(false);
  const [isReadOnlyTextArea, setIsReadOnlyTextArea] = useState(false);
  const [textAreaSize, setTextAreaSize] = useState<TextAreaSize>("md");

  return (
    <ScrollView className="p-5 flex-1 flex flex-col   ">
      
    </ScrollView>
  );
}
