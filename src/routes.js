import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import SignIn from './pages/Signin'

export default createAppContainer(
  createSwitchNavigator({
    SignIn
  })
);