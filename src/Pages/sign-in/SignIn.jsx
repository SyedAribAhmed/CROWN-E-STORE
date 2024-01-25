import React, { useState } from 'react'
import FormInput from '../../components/Form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';
import './SignIn.scss' 

import {auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          await signInWithEmailAndPassword(auth, email, password);
          setEmail('');
          setPassword ('');
        } catch (error) {
          console.log(error);
        }
    }
    
  return (
    <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput 
                      type='email' 
                      name='email' 
                      value={email} 
                      label='EMAIL' 
                      handleChange = {(e) => {setEmail(e.target.value)}} 
                      required />
            <FormInput 
                      type='password' 
                      name='password' 
                      value={password} 
                      label='PASSWORD' 
                      handleChange={(e) => {setPassword(e.target.value)}} 
                      required />

            <div className='buttons'>
              <CustomButton type='submit'>Sign In</CustomButton>
              <CustomButton onClick ={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
            </div>
            
        </form>
    </div>
  )
}

export default SignIn