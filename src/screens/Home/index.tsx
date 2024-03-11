import { FlatList, Text, View } from "react-native"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Task } from "../../components/Task"
import { useMemo, useState } from "react"
import { styles } from "./styles"

import ClipboardIcon from "../../assets/icons/clipboard-icon.svg"
import LogoImg from "../../../assets/logo.svg"

type Task = {
    id: number
    text: string
    isChecked: boolean
}

const initialTasks = [
    {
        id: 0,
        text: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
        isChecked: true
    },
    {
        id: 1,
        text: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
        isChecked: false
    },
    {
        id: 2,
        text: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
        isChecked: true
    },
    {
        id: 3,
        text: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
        isChecked: false
    },
    {
        id: 4,
        text: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
        isChecked: false
    }
]

export function Home() {
    const [tasks, setTasks] = useState<Task[]>(initialTasks)
    const [taskText, setTaskText] = useState('')

    const todosCreated = useMemo(() => {
        return tasks.filter(task => !task.isChecked).length
    },[tasks])

    const todosCompleted = useMemo(() => {
        return tasks.filter(task => task.isChecked).length
    },[tasks])

    function handleAddTask() {
        //TODO: select checkbox by id
    }

    function handleCheckboxPressed(id: number) {
        //TODO: select checkbox by id
    }

    function handleDeleteTask(id: number) {
        //TODO: delete checkbox by id
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <LogoImg width={110} height={32} />
            </View>
            <View style={styles.toDoContainer}>
                <View style={styles.inputContainer}>
                    <Input 
                        placeholder="Adicione uma nova tarefa"
                        style={styles.input}
                        onChangeText={setTaskText}
                        value={taskText}/>
                    <Button style={styles.addToDoButton} icon="plus" onPress={handleAddTask} />
                </View>
                <FlatList
                     data={tasks}
                     keyExtractor={item => String(item.id)}
                     ListHeaderComponent={() => 
                        <View style={styles.toDoHeaderContainer}>
                            <View style={styles.toDoHeaderStatusContainer}>
                                <Text style={styles.toDoHeaderCreated}>Criadas</Text>
                                <View style={styles.toDoCountContainer}>
                                    <Text style={styles.toDoCount}>{todosCreated}</Text>
                                </View>
                            </View>

                            <View style={styles.toDoHeaderStatusContainer}>
                                <Text style={styles.toDoHeaderDone}>Concluídas</Text>
                                <View style={styles.toDoCountContainer}>
                                    <Text style={styles.toDoCount}>{todosCompleted}</Text>
                                </View>
                            </View>
                        </View>
                    }
                     renderItem={({item}) => 
                        <Task 
                            style={styles.task}
                            task={item.text} 
                            isChecked={item.isChecked} 
                            onCheckValueChange={() => handleCheckboxPressed(item.id)}
                            onDeleteTask={() => handleDeleteTask(item.id)}/>
                    }
                    ListEmptyComponent={() => 
                        <View style={styles.emptyContainer}>
                            <ClipboardIcon />
                            <Text style={styles.emptyTitle}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.emptyDescription}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    }
                />
            </View>
        </View>
    )
}