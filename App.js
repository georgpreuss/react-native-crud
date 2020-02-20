import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/ BlogContext'

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})

const App = createAppContainer(navigator)

// eslint-disable-next-line react/display-name
export default () => {
  return <Provider>
    <App />
  </Provider>
}