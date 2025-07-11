import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Lock, User } from 'lucide-react-native';
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function LoginScreen() {
    const navigation = useNavigation();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Add login logic here
    };

    return (
        <LinearGradient colors={['#89f7fe', '#66a6ff']} style={styles.container}>
            <Text style={styles.title}>Login into your account</Text>

            {/* Username */}
            <View style={styles.inputWrapper}>
                <User size={20} color="#333" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#666"
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={(text) => setFormData({ ...formData, username: text })}
                />
            </View>

            {/* Password */}
            <View style={styles.inputWrapper}>
                <Lock size={20} color="#333" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#666"
                    secureTextEntry
                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.redirect}
                onPress={() => navigation.navigate('Register' as never)}
            >
                <Text>Don't have an account? </Text>
                <Text style={{ color: '#007bff' }}>Register</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#fff',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffffcc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    redirect: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
