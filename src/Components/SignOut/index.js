import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'
import * as ROUTES from '../../constants/routes'

const SignOut = () => {
  const navigate = useNavigate()
  const { firebase } = useContext(FirebaseContext)

  const logout = async () => {
    try {
      await firebase.doSignOut()
      navigate(ROUTES.SIGN_IN)
    } catch (error) {
      console.log(error)
    }
  }

  return <button onClick={logout}>Sign Out</button>
}

export default SignOut
