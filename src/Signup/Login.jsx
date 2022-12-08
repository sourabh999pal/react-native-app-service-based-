import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';



const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Submit = () => {
        console.log(email, password)
    }

    return (
        <View>

            <Text style={{
                alignSelf: 'center',
                fontSize: 20,
                color: '#007AFF',
                marginTop: 80,
            }}>Login here!</Text>
            <View style={{
                marginTop: 20
            }}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    keyboardType='default'
                    onChangeText={setPassword}
                    value={password}
                />
            </View>

            <View style={{
                width: '80%',
                alignSelf: 'center',
                marginTop: 40,
            }}>
                <Button
                    title='Submit'
                    onPress={Submit}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{
                    fontSize: 15,
                    alignSelf: 'center',
                    marginLeft: 100,
                    marginTop: 40,

                }}>don't have Account ? Register here</Text>
            </TouchableOpacity>

        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        width: '90%',
        marginHorizontal: '5%',
        borderWidth: 2,
        borderRadius: 20,
        marginTop: 20,
        borderColor: '#5588ff',
        backgroundColor: '#e0e7ee',
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 20,
    }
})