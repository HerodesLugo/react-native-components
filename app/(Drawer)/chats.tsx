import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ChatsScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chats</Text>
            {/* Add your chat components here */}
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
    },
});

export default ChatsScreen;