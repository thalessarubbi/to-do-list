import { Pressable, PressableProps } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";

interface CheckboxProps extends PressableProps {
    checked?: boolean
    onCheckValueChange: () => void
}

export function Checkbox({ checked = false, onCheckValueChange }: CheckboxProps) {
    
    return (
        <Pressable
            style={[styles.container, checked && styles.checkedContainer]}
            onPress={() => onCheckValueChange}>
            {checked && <Ionicons name="checkmark" size={10} color="white" />}
        </Pressable>
    )   
}