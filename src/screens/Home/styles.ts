import { StyleSheet } from "react-native";

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

    emptyContainer: {
        height: 208,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#333333'
    },
    emptyTitle: {
        marginTop: 16,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#808080'
    },
    emptyDescription: {
        fontSize: 14,
        color: '#808080'
    },
})