import { Input } from "../../components/Input"
import { View } from "react-native"
import { styles } from "./styles"

import { Button } from "../../components/Button"
import LogoImg from '../../../assets/logo.svg'

export function Home() {
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
            </View>
        </View>
    )
}