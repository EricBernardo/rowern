import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { signInRequest } from './../../store/modules/auth/actions'
import { useDispatch } from 'react-redux';

// import { Container, Form, FormInput, SubmitButton } from './styles'

const styles = StyleSheet.create({
  input: {
    fontSize: 20, 
    height: 45, 
    color: '#fff', 
    backgroundColor: '#283443', 
    marginBottom: 20, 
    borderWidth: 1, 
    borderRadius: 5, 
    borderColor: 'hsla(0,0%,100%,.1)' 
  },
  button: {
    backgroundColor: '#409efc' 
  },
  container: { 
    flex: 1, 
    padding: 10, 
    backgroundColor: '#2d3a4b' 
  }
});

export default function Signin() {

  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [ email, setEmail ] = useState('eric.bernardo.sousa@gmail.com')
  const [ password, setPassword ] = useState('96265851')

  function handleSubmit(){
    dispatch(signInRequest(email, password))
  }

  return (
    <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 26, color: '#fff' }}>Rocketz Web</Text>
        </View>
        <View style={{ flex: 2, margin: 20}}>            
            <TextInput 
              style={styles.input} 
              placeholder='Digite seu e-mail!' 
              placeholderTextColor='#fff' 
              padding={10} 
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput 
              style={styles.input} 
              placeholder='Senha' 
              placeholderTextColor='#fff' 
              padding={10} 
              secureTextEntry={true}
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />
            <Button title="Login" style={styles.button} onPress={() => handleSubmit} />            
        </View>
    </View>
  );
}