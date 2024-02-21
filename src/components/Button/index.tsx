import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import TrashIcon from '../../assets/icons/trash-icon.svg'
import PlusIcon from '../../assets/icons/plus-icon.svg'
import { styles } from "./styles";
import { useState } from "react";

interface ButtonProps extends TouchableOpacityProps {
    variant?: 'primary' | 'secondary',
    icon: 'plus' | 'trash',
    color?: string
    pressedColor?: string
}

const pressedStyle = {
    primary: styles.primaryPressed,
    secondary: styles.secondaryPressed
}

export function Button({
        variant = 'primary', 
        icon, 
        color = '#fff', 
        pressedColor='#fff', 
        style, 
        ...props
    }: ButtonProps) {
    const [isPressed, setIsPressed] = useState(false)

    const Icon = {
        plus: <PlusIcon fill={isPressed ? pressedColor : color} />,
        trash: <TrashIcon fill={isPressed ? pressedColor : color} />
    }

    return (
        <TouchableOpacity 
            style={[styles[variant], style, isPressed && pressedStyle[variant]]} 
            onPressIn={() => setIsPressed(true)} 
            onPressOut={() => setIsPressed(false)}
            activeOpacity={1}
            {...props}
        >
            {Icon[icon]}
        </TouchableOpacity>
    )
}