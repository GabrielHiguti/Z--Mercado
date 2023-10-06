import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function Button({children}) {
    return (
    <TouchableOpacity>
        <Text style={styles.button}> {children} </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#FFBA26',
        color: '#121A2C',
        paddingVertical: 8,
        paddingHorizontal: 48,
        borderRadius: 4,
        marginTop: 16,
        marginBottom: 16,
      }
})