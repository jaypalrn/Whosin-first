import React from 'react'
import Navigation from './src/routes/Navigation'
import { persistor, store } from './src/utilities/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  )
}

export default App