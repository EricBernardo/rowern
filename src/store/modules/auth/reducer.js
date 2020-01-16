import produce from 'immer'

const INITIAL_STATE = {
  access_token: null,
  signed: false,
  loading: false,
  email: null,
  password: null
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true
        draft.email = action.payload.email
        draft.password = action.payload.password
        break
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.access_token = action.payload.access_token
        draft.signed = true
        draft.loading = false
        break
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false
        break
      }
      case '@auth/SIGN_OUT': {
        draft.acces_token = null
        draft.signed = false
        break
      }
      default:
    }
  })
}
