import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    toDoHeaderContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 35,
        height: 19
    },
    toDoHeaderStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    toDoHeaderCreated: {
        fontFamily: 'Bold',
        color: '#4EA8DE',
        marginRight: 8,
        fontSize: 14
    },
    toDoCountContainer: {
        backgroundColor: '#333333',
        justifyContent: 'center',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,
        width: 25
    },
    toDoCount: {
        textAlign: 'center',
        fontFamily: 'Bold',
        color: '#D9D9D9',
        fontSize: 12
    },
    toDoHeaderDone: {
        fontFamily: 'Bold',
        color: '#8284FA',
        marginRight: 8,
        fontSize: 14
    },
})