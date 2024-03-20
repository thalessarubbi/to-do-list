import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        backgroundColor: '#262626',
        borderColor: '#333333',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        padding: 12,
        height: 64
    },
    containerDone: {
        borderColor: 'transparent'
    },
    task: {
        fontFamily: 'Regular',
        marginHorizontal: 8,
        color: '#F2F2F2',
        flexWrap: 'wrap',
        lineHeight: 19.6,
        fontSize: 14,
        flex: 1
    },
    taskDone: {
        textDecorationLine: 'line-through',
        color: '#808080'
    },
    button: {
        height: 32,
        width: 32
    }
})