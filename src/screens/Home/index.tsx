import { TaskListHeader } from "../../components/TaskListHeader"
import { Alert, FlatList, Text, View } from "react-native"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Task } from "../../components/Task"
import { useMemo, useState } from "react"
import { styles } from "./styles"

import ClipboardIcon from "../../assets/icons/clipboard-icon.svg"
import LogoImg from "../../../assets/logo.svg"

type Task = {
    text: string
    isChecked: boolean
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [taskText, setTaskText] = useState('')

    const tasksCompleted = useMemo(() => {
        return tasks.filter(task => task.isChecked).length
    },[tasks])

    function handleAddTask() {
        const alertTitle = 'Não foi possível adicionar a tarefa!'

        if (taskText.length < 1) {
            return Alert.alert(
                alertTitle,
                'Por favor, insira o nome da tarefa'
            )
        } else if (tasks.find(task => task.text === taskText)) {
            return Alert.alert(
                alertTitle,
                'Esta tarefa já está cadastrada'
            )
        } else {
            setTasks(prevState => [
                ...prevState, 
                { text: taskText, isChecked: false }
            ])
            setTaskText('')
        }
    }

    function handleCheckboxPressed(text: string) {
        const tasksUpdate = tasks.slice()
        const taskUpdate = tasksUpdate.find(task => task.text === text)

        if (taskUpdate) {
            taskUpdate.isChecked = !taskUpdate.isChecked
            setTasks(tasksUpdate)
        }
        
    }

    function handleDeleteTask(text: string) {
        setTasks(prevState => prevState.filter(task => task.text !== text))
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
                     keyExtractor={item => String(item.text)}
                     ListHeaderComponent={() => 
                        <TaskListHeader 
                            tasksCompleted={tasksCompleted} 
                            tasksCreated={tasks.length} />
                    }
                     renderItem={({item}) => 
                        <Task 
                            style={styles.task}
                            task={item.text} 
                            isChecked={item.isChecked} 
                            onCheckValueChange={() => handleCheckboxPressed(item.text)}
                            onDeleteTask={() => handleDeleteTask(item.text)}/>
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