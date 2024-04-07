import React from 'react'
import { AuthForm } from '@/components/auth/form'

import { redirect } from 'next/navigation'
import { readUserSession } from '@/lib/auth'

export default async function page() {
  const { data } = await readUserSession()

  if (data.session) {
    return redirect('/meeting')
  }

  return (
    <div className='flex mt-24 justify-center h-screen'>
      <div className='w-96'>
        <AuthForm />
      </div>
    </div>
  )
}
