import React from 'react'

import { redirect } from 'next/navigation'
import { readUserSession } from '@/lib/auth'

export default async function page() {
  const { data } = await readUserSession()

  // if (!data.session) {
  //   return redirect('/auth')
  // }

  return (
    <div className='flex mt-24 justify-center h-screen'>
      <div className='w-96'>
        <div className='max-w-xs'>
          <h3 className='mb-5 text-4xl'>N new members joined us this month</h3>
        </div>
      </div>
    </div>
  )
}
