import { View, Text } from "react-native"
import { styles } from "./styles"

import ClipboardIcon from "../../assets/icons/clipboard-icon.svg"

export function TaskListEmptyComponent() {
    return (
        <View style={styles.emptyContainer}>
            <ClipboardIcon />
            <Text style={styles.emptyTitle}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyDescription}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}