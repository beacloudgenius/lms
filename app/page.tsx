import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ProfileForm } from '@/components/profile-form'
import { AuthForm } from '@/components/auth/form'
export default function Home() {
  return (
    <main className='py-6'>
      <section className='py-12 flex flex-col items-center text-center'>
        <h1 className='text-4xl font-bold'>The Cloud Seminar</h1>
        <span className='flex items-center text-center'>
          <em>powered by&nbsp;&nbsp;</em> <h2 className='text-xl'> Cloud Genius®</h2>
        </span>
        <p className='text-2xl text-muted-foreground mt-8'>
          Intense hands-on, time consuming, and expensive
        </p>
      </section>

      {/*
			<div className='flex gap-6 items-center justify-center'>
        <Button variant={'secondary'}>Learn More</Button>
        <Button variant={'default'}>Enroll Now</Button>
      </div>
			*/}
      <div className='flex mt-8 justify-center h-screen'>
        <div className='w-96'>
          <AuthForm />
        </div>
      </div>
      <div className='flex mt-8 items-center justify-center'>
        <ProfileForm />
      </div>
    </main>
  )
}
// ```
// Interested in using technology to get things done?

// Forget about starting a company.

// Try making $1,000 with a small project first. We learn a lot more from small wins than from big failures. When you join Small Bets you'll find a support network ready to help you get your first small wins, along with regular live classes to teach and inspire you.

// — Your hosts, Daniel Vassallo & Louie Bacaj
// I WANT TO JOIN!
// Join 5,127 members. Get access to all live events, all recordings, and our support network.
// 184 new members joined Small Bets this month:
// ```
