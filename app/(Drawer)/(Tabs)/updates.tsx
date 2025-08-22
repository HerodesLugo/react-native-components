import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UpdatesScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Updates</Text>
            <Text style={styles.text}>No updates available at the moment.</Text>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    text: {
        fontSize: 16,
        color: '#666',
    },
});

export default UpdatesScreen;