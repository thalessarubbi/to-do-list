import { TextInput, TextInputProps } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

export function Input({style, ...props}: TextInputProps) {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <TextInput 
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={[
                styles.container,
                style, 
                isFocused && styles.focusedContainer
                ]}
            placeholderTextColor="#808080"
            {...props}
        />
    )
}