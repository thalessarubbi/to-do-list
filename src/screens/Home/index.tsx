import { View } from "react-native";
import { styles } from "./styles";

import LogoImg from '../../../assets/logo.svg'

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <LogoImg width={110} height={32} />
            </View>
            <View style={styles.toDoContainer}>
                
            </View>
        </View>
    )
}