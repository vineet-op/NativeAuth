import { StyleSheet, Text, View } from "react-native";

export default function Homepage() {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Welcome to the Homepage</Text>
                <Text style={styles.subtitle}>This is the main content area.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
    contentContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        marginTop: 10
    }
})
