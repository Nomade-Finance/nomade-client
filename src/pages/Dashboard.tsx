import { getAuth, signOut } from 'firebase/auth'

import PostLayout from '@layouts/PostLayout'
import React from 'react'

export interface DashboardProps {}
const Dashboard : React.FunctionComponent<DashboardProps> = () => {
  const auth = getAuth()

  return (
    <PostLayout>
        <h3>Dashboard<p>Bienvenue:</p></h3>
        <button onClick={() => { signOut(auth).then(() => { console.log('Signed out') }).catch((error) => { console.error('Sign out error', error) }) }}>Sign out of Firebase</button>
    </PostLayout>
  )
}
export default Dashboard
