import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';



const Register = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const Submit = () => {
        fetch('http://192.168.83.1:5000/register',{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                mobile,
                password
            })
        } )
          .then(res =>res.json())
          .then(data => {
            console.log(data)
            navigation.navigate('Login');
          })
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Name'
                keyboardType='default'
                onChangeText={setName}
                value={name}
            />

            <TextInput
                style={styles.input}
                placeholder='Email'
                keyboardType='default'
                onChangeText={setEmail}
                value={email}
            />
             <TextInput
                style={styles.input}
                placeholder='Mobile'
                keyboardType='number-pad'
                onChangeText={setMobile}
                value={mobile}
            />
             <TextInput
                style={styles.input}
                placeholder='Password'
                keyboardType='visible-password'
                onChangeText={setPassword}
                value={password}
            />
             <View style={{
                width: '80%',
                alignSelf: 'center',
                marginTop: 40,
            }}>
                <Button
                    title='Register'
                    onPress={Submit}
                />
            </View>
        </View>
    )
}

export default Register

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