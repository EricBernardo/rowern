import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Title, Form, FormInput, SubmitButton, LogoutButton } from './styles'; 

import { updateProfileRequest } from './../../store/modules/user/actions'
import { signOut } from './../../store/modules/auth/actions'

export default function Profile() {

  const profile = useSelector(state => state.user.profile)

  const loading = useSelector(state => state.user.loading)

  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [ name, setName ] = useState(profile.name)
  const [ email, setEmail ] = useState(profile.email)
  const [ password, setPassword ] = useState('')
  const [ password_confirmation, setPasswordConfirmation ] = useState('')

  function handleSubmit(){
    dispatch(updateProfileRequest({
      name,
      email,
      password,
      password_confirmation
    }))
  }

  function handleLogout(){
    dispatch(signOut())
  }

  return (
      <Container>        
          <Title>Meu perfil!</Title>         
          <Form>
          <FormInput
              icon="person"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome"
              returnKeyType="next"
              ref={nameRef}
              onSubmitEditing={() => emailRef.current.focus()}
              value={name}
              onChangeText={setName}
            />
            <FormInput
              icon="email"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="E-mail"
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
            <FormInput
              icon="lock"
              secureTextEntry
              placeholder="Senha"
              ref={passwordRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordConfirmationRef.current.focus()}
              value={password}
              onChangeText={setPassword}
            />            
            <FormInput
              icon="lock"
              secureTextEntry={true}
              placeholder="Confirmar senha"
              ref={passwordConfirmationRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password_confirmation}
              onChangeText={setPasswordConfirmation}
            />
            <SubmitButton loading={loading} title="Atualizar perfil" onPress={handleSubmit}>Atualizar perfil</SubmitButton>
            <LogoutButton title="Sair da Rocketz Web" onPress={handleLogout}>Sair da Rocketz Web</LogoutButton>
          </Form>
      </Container>
  );
}