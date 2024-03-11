import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    toDoHeaderContainer: {
        height: 19,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35,
        marginBottom: 20
    },
    toDoHeaderStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    toDoHeaderCreated: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 8
    },
    toDoCountContainer: {
        width: 25,
        justifyContent: 'center',
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: '#333333',
        borderRadius: 999
    },
    toDoCount: {
        color: '#D9D9D9',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    toDoHeaderDone: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 8
    },
})