import React, { useState } from 'react'
import FormInput from '../../components/Form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';


import {auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.scss'

const SignUp = () => {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
          }
        
          try {
            const { user } = await auth.createUserWithEmailAndPassword(
              email,
              password
            );

        await createUserProfileDocument(user, { displayName });
        setDisplayName('')
        setEmail('')
        setPassword('')
        setconfirmPassword('')
        
    } catch (error) {
        console.error(error);
      }
    }

  return (
    <div className='sign-up'>
    <h2 className='title'>I do not have a account</h2>
    <span>Sign up with your email and password</span>
    <form className='sign-up-form' onSubmit={handleSubmit}>
      <FormInput
        type='text'
        name='displayName'
        value={displayName}
        handleChange = {(e) => {setDisplayName(e.target.value)}}
        label='Display Name'
        required
      />
      <FormInput
        type='email'
        name='email'
        value={email}
        handleChange = {(e) => {setEmail(e.target.value)}}
        label='Email'
        required
      />
      <FormInput
        type='password'
        name='password'
        value={password}
        handleChange = {(e) => {setPassword(e.target.value)}}        
        label='Password'
        required
      />
      <FormInput
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        handleChange = {(e) => {setconfirmPassword(e.target.value)}}        
        label='Confirm Password'
        required
      />
      <CustomButton type='submit'>SIGN UP</CustomButton>
    </form>
  </div>
  )
}

export default SignUp