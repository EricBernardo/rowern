import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from './../../store/modules/auth/actions';

import { Container, Title, Form, FormInput, SubmitButton } from './styles'; 

export default function SignIn() {

  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [ email, setEmail ] = useState('eric.bernardo.sousa@gmail.com')
  const [ password, setPassword ] = useState('')

  const loading = useSelector(state => state.auth.loading)

  function handleSubmit(){    
    dispatch(signInRequest(email, password))
  }

  return (
      <Container>        
          <Title>Rocketz Web</Title>
          <Form>
            <FormInput 
              icon="email"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
            <FormInput 
              icon="lock"
              secureTextEntry={true}
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />            
            <SubmitButton loading={loading} title="Login" onPress={handleSubmit}>Login</SubmitButton>
          </Form>                    
      </Container>
  );
}