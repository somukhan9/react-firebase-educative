import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

import SignIn from '../SignIn'
import Landing from '../Landing'
import SignUp from '../SignUp'
import Home from '../Home'
import Account from '../Account'
import Admin from '../Admin'
import PasswordReset from '../PasswordReset'
import Navigation from '../Navigation'

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path={ROUTES.LANDING} element={<Landing />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ACCOUNT} element={<Account />} />
        <Route path={ROUTES.ADMIN} element={<Admin />} />
        <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordReset />} />
      </Routes>
    </div>
  )
}

export default App
