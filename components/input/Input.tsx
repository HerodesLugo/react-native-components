import React, { FC } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
    label?: string;
}

const Input: FC<InputProps> = ({ label, ...props }) => (
    <View>
        {label && <Text>{label}</Text>}
        <TextInput {...props} />
    </View>
);

export default Input;