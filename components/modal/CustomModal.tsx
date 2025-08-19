import { Modal, View } from "react-native";
import { CustomModalProps } from "./types";

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View
        className="flex-1 justify-center items-center bg-black/30"
      >
        <View
          className="bg-white rounded-xl p-5 min-w-[70%] shadow-lg"
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
