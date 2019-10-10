// React
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
// Services
import api from '../services/api';
// Assets
import logo from '../assets/logo.png'

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    
    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user)
                navigation.navigate('Main', { user })
        })
    }, []);

    // Submit do form
    async function handleSubmit() {              
        const response = await api.post('/devs', {
            username
        });
        
        const { _id } = response.data;
        
        await AsyncStorage.setItem('user', _id);

        navigation.navigate('Main', { user: _id });
    }    

    // Retorna componente
    return (
        <View style={styles.container}>
            <Image source={logo} />

            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Github"
                placeholderTextColor="#999"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />

            <TouchableOpacity 
                onPress={handleSubmit}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#df4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});