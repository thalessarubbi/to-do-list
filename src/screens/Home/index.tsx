import { FlatList, Text, View } from "react-native"
import { Input } from "../../components/Input"
import { styles } from "./styles"

import ClipboardIcon from "../../assets/icons/clipboard-icon.svg"
import { Button } from "../../components/Button"
import LogoImg from "../../../assets/logo.svg"
import { Task } from "../../components/Task"

export function Home() {
    const tasks = [
        {
            id: 0,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
            isChecked: false
        },
        {
            id: 1,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
            isChecked: false
        },
        {
            id: 2,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
            isChecked: false
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
                        style={styles.input} 
                        placeholder="Adicione uma nova tarefa" />
                    <Button style={styles.addToDoButton} icon="plus" />
                </View>
                <FlatList
                     data={tasks}
                     keyExtractor={item => String(item.id)}
                     ListHeaderComponent={() => 
                        <View style={styles.toDoHeaderContainer}>
                            <View style={styles.toDoHeaderStatusContainer}>
                                <Text style={styles.toDoHeaderCreated}>Criadas</Text>
                                <View style={styles.toDoCountContainer}>
                                    <Text style={styles.toDoCount}>0</Text>
                                </View>
                            </View>

                            <View style={styles.toDoHeaderStatusContainer}>
                                <Text style={styles.toDoHeaderDone}>Concluídas</Text>
                                <View style={styles.toDoCountContainer}>
                                    <Text style={styles.toDoCount}>0</Text>
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