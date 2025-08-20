import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AboutScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.description}>
                This is the About screen of the app. Here you can find information about the application and its purpose.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
    },
});

export default AboutScreen;