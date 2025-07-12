import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Lock, User } from 'lucide-react-native';
import { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';


export default function LoginScreen() {

    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const HARD_CODED_USER = {
        username: 'user',
        password: 'password123',
    };

    const handleSubmit = () => {
        let hasError = false;
        let newErrors = { username: '', email: '', password: '', confirmPassword: '' };

        if (!formData.username) {
            newErrors.username = 'Username is required';
            hasError = true;
        }



        if (!formData.password) {
            newErrors.password = 'Password is required';
            hasError = true;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            hasError = true;
        }
        setErrors(newErrors);
        if (hasError) return;

        if (
            formData.username === HARD_CODED_USER.username &&
            formData.password === HARD_CODED_USER.password
        ) {
            router.push({
                pathname: '/Homepage',
                params: { username: formData.username },
            });
        } else {
            Alert.alert('Invalid registration details');
        }
    };

    return (

        <LinearGradient colors={['#89f7fe', '#66a6ff']} style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'android' ? 10 : 0}
            >
                <Animated.View
                    style={styles.logos}
                    entering={FadeInUp.duration(200)}
                >
                    <Image
                        source={require('../assets/images/react-logo.png')}
                        style={{ width: 100, height: 100 }}
                        resizeMode="contain"
                    />
                    <Animated.Text
                        style={styles.title}
                        entering={FadeInUp.duration(200)}
                    >
                        Login into your account
                    </Animated.Text>
                </Animated.View>

                {/* Username */}
                <Animated.View
                    style={styles.inputWrapper}
                    entering={FadeInDown.delay(200).duration(200)}
                >
                    <User size={20} color="#333" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="#666"
                        keyboardType="default"
                        autoCapitalize="none"
                        onChangeText={(text) => setFormData({ ...formData, username: text })}
                    />
                </Animated.View>
                {errors.username ? (<Text style={styles.errorText}>{errors.username}</Text>) : null}

                {/* Password */}
                <Animated.View
                    style={styles.inputWrapper}
                    entering={FadeInDown.delay(200).duration(200)}
                >
                    <Lock size={20} color="#333" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#666"
                        secureTextEntry
                        onChangeText={(text) => setFormData({ ...formData, password: text })}
                    />
                </Animated.View>
                {errors.password ? (<Text style={styles.errorText}>{errors.password}</Text>) : null}

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Animated.Text
                        style={styles.buttonText}
                        entering={FadeInDown.delay(200).duration(200)}
                    >
                        Login
                    </Animated.Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.redirect}
                    onPress={() => router.push('/Register')}
                >
                    <Animated.Text
                        entering={FadeInDown.delay(200).duration(200)}
                    >
                        Don't have an account?
                    </Animated.Text>
                    <Animated.Text
                        style={{ color: '#007bff' }}
                        entering={FadeInDown.delay(200).duration(200)}
                    >
                        {" "}Register
                    </Animated.Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
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
        color: 'black',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffffcc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 8
    },
    icon: {
        marginRight: 8,
    },
    logos: {
        alignItems: 'center',
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
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    redirect: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    errorText: {
        color: 'red',
        textAlign: 'left',
        padding: 1,
    },
});
