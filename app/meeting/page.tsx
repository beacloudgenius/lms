import React from 'react'

import { redirect } from 'next/navigation'
import { readUserSession } from '@/lib/auth'

export default async function page() {
  const { data } = await readUserSession()

  if (!data.session) {
    return redirect('/auth')
  }

  return (
    <div className='flex mt-24 justify-center h-screen'>
      <div className='w-96'>
        <div className='max-w-xs'>
          <a href='https://meet.google.com/ovz-hate-kuz'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 87.5 72'>
              <path fill='#00832d' d='M49.5 36l8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z' />
              <path fill='#0066da' d='M0 51.5V66c0 3.315 2.685 6 6 6h14.5l3-10.96-3-9.54-9.95-3z' />
              <path fill='#e94235' d='M20.5 0L0 20.5l10.55 3 9.95-3 2.95-9.41z' />
              <path fill='#2684fc' d='M20.5 20.5H0v31h20.5z' />
              <path
                fill='#00ac47'
                d='M82.6 8.68L69.5 19.42v33.66l13.16 10.79c1.97 1.54 4.85.135 4.85-2.37V11c0-2.535-2.945-3.925-4.91-2.32zM49.5 36v15.5h-29V72h43c3.315 0 6-2.685 6-6V53.08z'
              />
              <path fill='#ffba00' d='M63.5 0h-43v20.5h29V36l20-16.57V6c0-3.315-2.685-6-6-6z' />
            </svg>
          </a>
          <h3 className='mb-5 text-4xl'>Join the meeting</h3>
        </div>
      </div>
    </div>
  )
}
