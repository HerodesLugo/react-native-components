// components/RadioButton.tsx

import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, TouchableOpacity, View } from 'react-native';

// Permite que los componentes animados acepten `className`

// 1. Definimos los tipos para las props
export type RadioButtonSize = 'sm' | 'md' | 'lg';

interface RadioButtonProps {
  label: string;
  value: any; // El valor único que representa esta opción
  selectedValue: any; // El valor actualmente seleccionado en el grupo
  onSelect: (value: any) => void;
  size?: RadioButtonSize;
  invalid?: boolean;
  disabled?: boolean;
}

// 2. Mapeo de tamaños para las dimensiones y clases de texto
const SIZES = {
  sm: {
    outer: 20,
    inner: 10,
    textClass: 'text-sm',
  },
  md: {
    outer: 24,
    inner: 12,
    textClass: 'text-base',
  },
  lg: {
    outer: 28,
    inner: 14,
    textClass: 'text-lg',
  },
};

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  selectedValue,
  onSelect,
  size = 'md',
  invalid = false,
  disabled = false,
}) => {
  const isSelected = value === selectedValue;
  const animatedValue = useRef(new Animated.Value(isSelected ? 1 : 0)).current;
  const { outer, inner, textClass } = SIZES[size];

  // 3. Animación para el punto interior
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isSelected ? 1 : 0,
      duration: 150,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false, // 'scale' es compatible con el driver nativo
    }).start();
  }, [isSelected, animatedValue]);

  const handlePress = () => {
    if (!disabled) {
      onSelect(value);
    }
  };

  // 4. Clases condicionales de NativeWind para los estados
  const outerRingClasses = [
    'justify-center items-center rounded-full border-2',
    isSelected && !invalid && 'border-blue-500',
    !isSelected && !invalid && 'border-gray-400',
    invalid && 'border-red-500',
  ].join(' ');

  const innerDotClasses = [
    'rounded-full',
    !invalid && 'bg-blue-500',
    invalid && 'bg-red-500',
  ].join(' ');

  const labelClasses = [
    textClass,
    !invalid && 'text-black',
    invalid && 'text-red-500',
  ].join(' ');

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      className={`flex-row items-center p-2 ${disabled ? 'opacity-50' : ''}`}
      accessibilityRole="radio"
      accessibilityState={{ checked: isSelected, disabled }}
    >
      <View
        className={outerRingClasses}
        style={{ width: outer, height: outer }}
      >
        <Animated.View
          className={innerDotClasses}
          style={{
            width: inner,
            height: inner,
            transform: [{ scale: animatedValue }],
          }}
        />
      </View>
      <Text className={`ml-3 ${labelClasses}`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
