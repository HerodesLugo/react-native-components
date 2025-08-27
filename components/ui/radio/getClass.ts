type Props = {
  isSelected: boolean;
  invalid: boolean;
  textClass: string;
};

export const getClass = (props: Props) => {

  const { isSelected, invalid, textClass } = props;
  
  return {
    outerRing: [
      "justify-center items-center rounded-full border-2",
      isSelected && !invalid && "border-blue-500",
      !isSelected && !invalid && "border-gray-400",
      invalid && "border-red-500",
    ].join(" "),

    innerDot: [
      "rounded-full",
      isSelected && !invalid && "bg-blue-500",
      invalid && "bg-red-500",
    ].join(" "),
    labelClasses: [
      textClass,
      !invalid && "text-black",
      invalid && "text-red-500",
    ].join(" "),
  };
};
