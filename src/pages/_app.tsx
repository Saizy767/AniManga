import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReduser from '../redux/rootReducer/rootReducer'

import '../styles/global.global.scss'

const store = createStore(rootReduser,compose(applyMiddleware(thunk)))

export default function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}