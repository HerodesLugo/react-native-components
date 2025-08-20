export type ModalVariant = "center" | "bottom" | "full";

export interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  variant?: ModalVariant;
  className?: string
}