import React from 'react'

import { redirect } from 'next/navigation'
import { readUserSession } from '@/lib/auth'

import Image from 'next/image'
export default async function page() {
  // const { data } = await readUserSession()

  // if (!data.session) {
  //   return redirect('/auth')
  // }

  return (
    <div>
      <div className='min-h-screen flex justify-center items-center'>
        <div className='shadow-md rounded-lg px-8 py-10 max-w-lg'>
          <h3 className='text-4xl font-bold mb-5 text-center'>Money-back Guarantee</h3>
          <h3 className='text-2xl mb-5 text-center'>No questions asked</h3>
          {/* <img src='https://i.thecloudseminar.com/2023/02/14d-moneyback-guarantee-768x678-1.png'></img> */}
          <Image src='https://i.thecloudseminar.com/2023/02/14d-moneyback-guarantee-768x678-1.png' alt='moneyback-guarantee image' width={768} height={678}/>
          <p className='mb-5 text-xl'>
            All programs you purchase from us, come with a 14-day money-back guarantee.
          </p>
          <p className='mb-5 text-3xl'>Enroll in our programs with confidence</p>
          <p className='mb-5'>
            We will ask you no questions. You do not need to provide any justification for your
            refund request. We want you to be delighted with your decision to participate in our
            programs.
          </p>
          <p className='mb-5'>
            Within 14 days of purchase, ask for a refund by emailing{' '}
            <a href='mailto:nilesh@thecloudseminar.com'>nilesh@thecloudseminar.com</a>. Please use
            the same email address you used to place your order with us.
          </p>
          <p className='mb-2 text-2xl'>
            Detailed terms and conditions of the money-back guarantee:
          </p>
          <ul className='list-disc ml-5 pl-3'>
            <li className='mb-2'>You receive a refund equal to the US $ price you paid.</li>
            <li className='mb-2'>
              Your refund is issued in the currency you used, but for the US $ value.
            </li>
            <li className='mb-2'>
              Terms and conditions of the credit card payment processor apply to credit card
              refunds.
            </li>
            <li className='mb-2'>We will bear the cryptocurrency refund transaction fees.</li>
          </ul>
          <p className='mb-2 mt-5 text-2xl'>What does this mean?</p>
          <p className='mb-5'>
            For example, if you paid BTC worth US $1000, you will receive BTC worth US $1000 using
            the exchange rate at the time of the refund.
          </p>
          <p className='mb-5'>
            Let’s assume that US $1000 = 0.001 BTC at the time of your purchase.
          </p>
          <ul className='list-disc ml-5 pl-3'>
            <li className='mb-2'>
              If the price of BTC doubles in the time elapsed from your purchase, you will receive a
              US $1000 value but half the amount of BTC (0.0005 BTC = worth US $1000).
            </li>
            <li className='mb-2'>
              Conversely, if the price of BTC plummets by half in that time, you will receive a US
              $1000 value but twice the amount of BTC (0.002 BTC = US $1000).
            </li>
          </ul>
          <p className='mb-2 mt-5 text-2xl'>This policy:</p>
          <ul className='list-disc ml-5 pl-3'>
            <li className='mb-2'>Avoids capital gains/losses on refunds.</li>
            <li className='mb-2'>Simplifies US tax accounting.</li>
            <li className='mb-2'>
              Ensures that no one (neither you nor we) misuses this money-back guarantee as a way to
              speculate on the US $ price of Bitcoin.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
