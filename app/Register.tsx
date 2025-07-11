import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Lock, Mail, User } from 'lucide-react-native';
import { useState } from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';


export default function RegisterScreen() {

    const router = useRouter();

    const HARD_CODED_USER = {
        username: 'user',
        email: 'user@example.com',
        password: 'password123',
        confirmPassword: 'password123',
    };

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = () => {
        let hasError = false;
        let newErrors = { username: '', email: '', password: '', confirmPassword: '' };

        if (!formData.username) {
            newErrors.username = 'Username is required';
            hasError = true;
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
            hasError = true;
        } else if (!formData.email.includes('@')) {
            newErrors.email = 'Invalid email format';
            hasError = true;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            hasError = true;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            hasError = true;
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
            hasError = true;
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            hasError = true;
        }

        setErrors(newErrors);
        if (hasError) return;

        if (
            formData.username === HARD_CODED_USER.username &&
            formData.email === HARD_CODED_USER.email &&
            formData.password === HARD_CODED_USER.password
        ) {
            router.push('/Login');
        } else {
            Alert.alert('Invalid registration details');
        }
    };

    return (
        <LinearGradient
            colors={['#89f7fe', '#66a6ff']}
            style={styles.container}
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
                    Create your account
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
                    onChangeText={(text) => setFormData({ ...formData, username: text })}
                />
            </Animated.View>
            {errors.username ? <Text style={styles.error}>{errors.username}</Text> : null}

            {/* Email */}
            <Animated.View
                style={styles.inputWrapper}
                entering={FadeInDown.delay(200).duration(200)}
            >
                <Mail size={20} color="#333" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(text) => setFormData({ ...formData, email: text })}
                />
            </Animated.View>
            {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

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
            {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

            {/* Confirm Password */}
            <Animated.View
                style={styles.inputWrapper}
                entering={FadeInDown.delay(200).duration(200)}
            >
                <Lock size={20} color="#333" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#666"
                    secureTextEntry
                    onChangeText={(text) =>
                        setFormData({ ...formData, confirmPassword: text })
                    }
                />
            </Animated.View>
            {errors.confirmPassword ? (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
            ) : null}

            <Animated.View
                entering={FadeInDown.delay(200).duration(200)}
            >
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={[styles.buttonText, { fontFamily: 'sans-medium' }]}>Register</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View
                style={styles.loginRedirect}
                entering={FadeInDown.delay(200).duration(200)}
            >
                <TouchableOpacity
                    onPress={() => router.push('/Login')}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <Text>Already have an account? </Text>
                    <Text style={{ color: '#007bff' }}>Login</Text>
                </TouchableOpacity>
            </Animated.View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        fontFamily: 'sans-medium',
    },
    logos: {
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'sans-medium',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffffcc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
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
    error: {
        color: 'red',
        marginBottom: 10,
        marginLeft: 5,
        fontSize: 13,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'sans-medium',
    },
    loginRedirect: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
