import React from 'react'

import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'

import './sign-in.styles.scss'

class SignIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handlesubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  }

  render() {
    return <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={this.state.email}
          label='Email'
          handleChange={this.handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={this.state.password}
          label='Password'
          handleChange={this.handleChange}
          required
        />
        <CustomButton type='submit'>Sign in</CustomButton>
      </form>
    </div>
  }
}

export default SignIn
