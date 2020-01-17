import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator} from 'react-navigation-tabs'

import SignIn from './pages/Signin'
import Profile from './pages/Profile'

export default (signedIn = false) => createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({      
      SignIn
    }),
    App: createBottomTabNavigator({
      Profile
    })
  }, {
    initialRouteName: signedIn ? 'App' : 'Sign'
  })
);