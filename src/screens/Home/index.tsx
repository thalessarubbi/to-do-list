import { Input } from "../../components/Input"
import { FlatList, Text, View } from "react-native"
import { styles } from "./styles"

import ClipboardIcon from '../../assets/icons/clipboard-icon.svg'
import { Button } from "../../components/Button"
import LogoImg from '../../../assets/logo.svg'

export function Home() {
    const tasks = [
        'Integer urna interdum massa libero auctor neque turpis turpis semper.',
        'Integer urna interdum massa libero auctor neque turpis turpis semper.',
        'Integer urna interdum massa libero auctor neque turpis turpis semper.',
        'Integer urna interdum massa libero auctor neque turpis turpis semper.',
        'Integer urna interdum massa libero auctor neque turpis turpis semper.'
    ]

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
                     data={[]}
                     keyExtractor={item => item}
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
                        <View>
                            <Text>{item}</Text>
                        </View>
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