import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { User } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function Homepage() {

    const { username } = useLocalSearchParams();

    return (
        <LinearGradient
            colors={['#89f7fe', '#66a6ff']}
            style={styles.container}
        >
            <View style={styles.centeredContainer}>
                <Animated.View
                    entering={FadeInUp.duration(300)}
                    style={styles.header}
                >
                    <View style={styles.userInfo}>
                        <Animated.View entering={FadeInDown.delay(200).duration(600)}>
                            <User size={50} color="#fff" />
                        </Animated.View>
                        <Animated.Text
                            entering={FadeInDown.delay(400).duration(600)}
                            style={styles.title}
                        >
                            Welcome, {username}!
                        </Animated.Text>
                    </View>
                </Animated.View>

                <Animated.View
                    entering={FadeInDown.delay(600).duration(800)}
                    style={styles.contentContainer}
                >
                    <Text style={styles.subtitle}>
                        This is the Homepage
                    </Text>
                </Animated.View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    userInfo: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingsIcon: {
        position: 'absolute',
        top: -50,
        right: -20,
        padding: 10,
    },
    contentContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
        textAlign: 'center',
    },
    subtitle: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        opacity: 0.8,
    }
})
