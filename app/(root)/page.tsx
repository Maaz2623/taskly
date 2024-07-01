import getUserById from '@/lib/actions/user.actions'
import { connectToDatabase } from '@/lib/database/mongoose'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const HomePage = async () => {

  const {userId} = auth()

  const user = await getUserById(userId)

  console.log(user)

  return (
    <div>HomePage</div>
  )
}

export default HomePage