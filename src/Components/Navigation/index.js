import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import useGlobalAuth from '../Session/context'
import SignOut from '../SignOut'

const Navigation = () => {
  const { authUser } = useGlobalAuth()

  return (
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      {authUser ? (
        <>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
          <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
          </li>
          <li>
            <SignOut />
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
          </li>
        </>
      )}
    </ul>
  )
}

export default Navigation
