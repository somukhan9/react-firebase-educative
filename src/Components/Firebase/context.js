import React from 'react'
import Firebase from './firebase'

const FirebaseContext = React.createContext()

const FirebaseProvider = ({ children }) => {
  const values = {
    firebase: new Firebase(),
  }

  return (
    <FirebaseContext.Provider value={values}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { FirebaseContext, FirebaseProvider }
