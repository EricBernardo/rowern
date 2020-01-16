export function signInRequest(email, password) {  
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password}
  }
}

export function signInSuccess(access_token, profile) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { access_token, profile }
  }
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  }
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT'
  }
}
