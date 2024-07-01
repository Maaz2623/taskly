import { auth } from '@clerk/nextjs/server'
import React from 'react'

const HomePage = () => {

  const {userId} = auth()

  console.log(userId)

  return (
    <div>HomePage</div>
  )
}

export default HomePage