import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ContactScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact</Text>
            <Text style={styles.text}>This is the contact screen.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});

export default ContactScreen;