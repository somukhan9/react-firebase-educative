import React, { Component, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { FirebaseContext } from '../Firebase'

const SignUp = () => {
  const navigate = useNavigate()
  const { firebase } = useContext(FirebaseContext)

  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm firebase={firebase} navigate={navigate} />
    </div>
  )
}

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

export class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: { ...INITIAL_STATE },
    }
  }

  onChange = (event) => {
    this.setState({
      user: { ...this.state.user, [event.target.name]: event.target.value },
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { username, email, passwordOne } = this.state.user

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((userCredentials) => {
        this.setState({ user: { ...INITIAL_STATE } })
        this.props.firebase.doSaveUserDocument(username, email)
        this.props.navigate(ROUTES.HOME)
        // console.log(userCredentials)
      })
      .catch((error) => {
        this.setState({ user: { ...this.state.user, error: error } })
        console.log(error)
      })
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state.user
    const isInvalid =
      email === '' ||
      username === '' ||
      passwordOne === '' ||
      passwordOne !== passwordTwo

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)

export default SignUp
export { SignUpLink }
