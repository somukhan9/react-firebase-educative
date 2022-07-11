import React, { useContext } from 'react'
import { FirebaseContext } from '../Firebase'
import { onAuthStateChanged } from 'firebase/auth'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const { firebase } = useContext(FirebaseContext)
  const [authUser, setAuthUser] = React.useState(null)

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase.auth, (user) => {
      if (user) {
        // console.log(user)
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => {
      unsubscribe()
    }

    // eslint-disable-next-line
  }, [])

  const values = { authUser }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

const useGlobalAuth = () => {
  return useContext(AuthContext)
}

export { AuthContext, AuthProvider }
export default useGlobalAuth
