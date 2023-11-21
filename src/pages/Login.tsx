import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'

import Button from '@components/Button/Button'
import PostLayout from '@layouts/PostLayout'
import { useNavigate } from 'react-router-dom'

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const [authing, setAuthing] = useState(false)

  const signInWithGoogle = () => {
    setAuthing(true)

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid)
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error)
        setAuthing(false)
      })
  }

  return (
        <PostLayout>
            <div>
            <p>Login Page</p>
            <Button
            label='Se  Connecter avec Google'
            onClick={() => signInWithGoogle()}
            disabled={authing}
            />
            </div>

        </PostLayout>
  )
}

export default LoginPage
