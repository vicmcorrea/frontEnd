import React from 'react'
import { auth } from '../firebase'
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const SignIn = () => {

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  return (
    <div className='signin'>
      <div className='signin__container'>
        <button className="signin__btn flex items-center justify-center" onClick={signInWithGoogle}>
          <FcGoogle className='m-2' />
          Sign in with Google
        </button>

        <p className='signin__tos'>The Turing Chatbot</p>
      </div>
    </div>
  )
}

export default SignIn