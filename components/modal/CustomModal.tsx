import { Modal, View } from "react-native";
import { styleModal } from "./styles";
import { CustomModalProps } from "./types";

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  children,
  overlayStyle = {},
  contentStyle = {},

}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={[styleModal.overlay, overlayStyle]}>
        <View style={[styleModal.content, contentStyle]}>
    
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
