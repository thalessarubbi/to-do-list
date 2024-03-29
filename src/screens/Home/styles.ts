import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a'
    },
    logo: {
        width: '100%',
        height: 173,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D0D0D',
    },
    
    toDoContainer: {
        flex: 1,
        paddingHorizontal: 24
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -27
    },
    input: {
        flex: 1,
        marginRight: 4
    },
    addToDoButton: {
        width: 52,
        height: 52,
    },

    task: {
        marginBottom: 8
    }
})