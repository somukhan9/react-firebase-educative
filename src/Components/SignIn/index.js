import React, { useContext, Component } from 'react'
import { FirebaseContext } from '../Firebase/index'
import { SignUpLink } from '../SignUp'
import * as ROUTES from '../../constants/routes'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()
  const { firebase } = useContext(FirebaseContext)

  return (
    <div>
      <h1>SignIn</h1>
      <SignInForm firebase={firebase} navigate={navigate} />
      <SignUpLink />
    </div>
  )
}

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

export class SignInForm extends Component {
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

    const { email, password } = this.state.user
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        this.setState({ user: { ...INITIAL_STATE } })
        this.props.navigate(ROUTES.HOME)
      })
      .catch((error) => {
        this.setState({ user: { ...this.state.user, error: error } })
      })
  }

  render() {
    const { email, password, error } = this.state.user
    const isInvalid = email === '' || password === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

export default SignIn
