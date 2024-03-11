import { View, Text, ViewProps } from "react-native";
import { Checkbox } from "../Checkbox";
import { Button } from "../Button";
import { styles } from "./styles";

interface TaskProps extends ViewProps {
    task: string,
    isChecked: boolean,
    onCheckValueChange: () => void
    onDeleteTask: () => void
}

export function Task({ task, isChecked, onCheckValueChange, onDeleteTask, style }: TaskProps ){
    return (
        <View style={[styles.container, isChecked && styles.containerDone, style]}>
            <Checkbox 
                onCheckValueChange={() => onCheckValueChange()} 
                checked={isChecked} 
                />
            <Text style={[styles.task, isChecked && styles.taskDone]}>{task}</Text>
            <Button 
                style={styles.button} 
                color="#808080" 
                variant="secondary"
                icon="trash" 
                pressedColor="#E25858"
                onPress={onDeleteTask}
                />
        </View>
    )
}