import { View, Text } from "react-native"
import { styles } from "./styles"

type TaskListProps = {
    tasksCreated: number
    tasksCompleted: number
}

export function TaskListHeader({ tasksCompleted, tasksCreated }: TaskListProps) {
    return (
        <View style={styles.toDoHeaderContainer}>
            <View style={styles.toDoHeaderStatusContainer}>
                <Text style={styles.toDoHeaderCreated}>Criadas</Text>
                <View style={styles.toDoCountContainer}>
                    <Text style={styles.toDoCount}>{tasksCreated}</Text>
                </View>
            </View>

            <View style={styles.toDoHeaderStatusContainer}>
                <Text style={styles.toDoHeaderDone}>Concluídas</Text>
                <View style={styles.toDoCountContainer}>
                    <Text style={styles.toDoCount}>{tasksCompleted}</Text>
                </View>
            </View>
        </View>
    )
}