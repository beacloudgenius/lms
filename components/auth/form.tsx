import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import SignInForm from './signin'
import RegisterForm from './register'

export function AuthForm() {
  return (
    <>
      <div className='space-y-5'>
        <h1 className='text-center text-3xl font-bold'>Cloud Genius®</h1>
        <Tabs defaultValue='signin' className='w-full'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='signin'>Sign In</TabsTrigger>
            <TabsTrigger value='register'>Register</TabsTrigger>
          </TabsList>
          <TabsContent value='signin'>
            <SignInForm />
          </TabsContent>
          <TabsContent value='register'>
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
