import { Alert } from 'react-native'
import { takeLatest, call, put, all } from 'redux-saga/effects'

import api from '../../../services/api'

import { signInSuccess, signFailure } from './actions'

export function* signIn({ payload }) {

  try {

    const { email, password } = payload
      
    const response = yield call(api.post, '/auth', {
      username: email,
      password: password
    })

    const { access_token } = response.data

    if(!access_token) {
      Alert.alert('Erro no login', 'Usuário inválido')
      return
    }

    api.defaults.headers.Authorization = `Bearer ${access_token}`
    const profile = yield call(api.get, '/profile')

    yield put(signInSuccess(access_token, profile.data.data))

    // Alert.alert(access_token)

    // history.push('/category')

  } catch (err) {
    Alert.alert('Erro no login', 'Falha na autenticação, verifique seus dados')
    yield put(signFailure())
  }

}

export function setToken({ payload }) {
  if(!payload) return

  const { access_token } = payload.auth

  if(access_token) {
    api.defaults.headers.Authorization = `Bearer ${access_token}`
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn)
])
