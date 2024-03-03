import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 64,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#262626',
        borderRadius: 8,
        borderColor: '#333333',
        borderWidth: 1
    },
    containerDone: {
        borderColor: 'transparent'
    },
    task: {
        flex: 1,
        marginHorizontal: 8,
        color: '#F2F2F2',
        fontSize: 14,
        flexWrap: 'wrap'
    },
    taskDone: {
        textDecorationLine: 'line-through',
        color: '#808080'
    },
    button: {
        width: 32,
        height: 32
    }
})