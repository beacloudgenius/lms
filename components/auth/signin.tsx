'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import { signInWithEmailAndPassword } from './actions'
import { useTransition } from 'react'
// import { cn } from '@/lib/utils'

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Password is required.'
  })
})

export default function SignInForm() {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const result = await signInWithEmailAndPassword(data)
      const { error } = JSON.parse(result)
      if (error?.message)
        toast({
          variant: 'destructive',
          title: 'Fail to Login',
          description: (
            <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
              <code className='text-white'>{error.message}</code>
            </pre>
          )
        })
    })
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Please login</CardTitle>
          <CardDescription>
            Please use the email address that you used to register with us.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='your@email.address'
                        {...field}
                        autoComplete='on'
                        type='email'
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Password'
                        {...field}
                        autoComplete='on'
                        type='password'
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter>
                <Button type='submit'>Sign In</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  )
}
